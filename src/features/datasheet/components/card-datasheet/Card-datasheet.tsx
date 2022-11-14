import { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DatasheetModel } from '../../models/datasheet.model';
import imageNotFound from '../../../../assets/images/imageNotFound.jpg';
import './Card-datasheet.css';

interface Actions {
    [key: string]: {
        icon?: JSX.Element,
        action: (...params: any) => void
    }
};

interface Props {
    datasheet: DatasheetModel;
    actions: Actions;
}

export const CardDatasheet = ({ datasheet, actions }: Props) => {
  const fieldsActions = actions ? Object.keys(actions) : undefined;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTotal = () => {
    return datasheet.workmanship.reduce((acc, curr) => acc + curr.value, 0) + (datasheet.weight * datasheet.metals.silver.price);
  };

  return (
        <Card sx={{ maxWidth: 300 }}>
            <CardHeader
                action={
                    <IconButton
                        aria-label="settings"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={datasheet.code}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
            >
                {
                    (actions && fieldsActions) &&
                    fieldsActions.map(a => (
                        <MenuItem key={a} onClick={() => {
                          handleClose();
                          actions[a].action(datasheet.id);
                        }}>
                            {actions[a].icon}
                        </MenuItem>
                    ))
                }
            </Menu>
            <CardMedia
                component="img"
                height="194"
                image={datasheet.image ?? imageNotFound}
                alt="img"
            />
            <CardContent>
                <table>
                    <tbody>
                        <tr>
                            <td>PLATA</td>
                            <td className='text-rigth'>{datasheet.weight}</td>
                            <td className='text-rigth'>{datasheet.metals.silver.price}</td>
                            <td className='text-rigth'>{datasheet.metals.silver.price * datasheet.weight}</td>
                        </tr>
                        {
                            datasheet.workmanship.map(work => (
                                <tr key={work.name}>
                                    <td colSpan={3}>{work.name.toUpperCase()}</td>
                                    <td className='text-rigth'>{work.value}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={3}>TOTAL</td>
                            <td className='text-rigth'>{getTotal()}</td>
                        </tr>
                        <tr>
                            <td>PORCENTAJE</td>
                            <td className='text-rigth'>{datasheet.expenses}</td>
                            <td className='text-rigth'>{(getTotal() * datasheet.expenses) / 100}</td>
                            <td className='text-rigth'>{(getTotal() * datasheet.expenses) / 100 + getTotal()}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>P. VENTA</td>
                            <td className='text-rigth'>{((getTotal() * datasheet.expenses) / 100 + getTotal()) * 2}</td>
                        </tr>
                    </tbody>
                </table>
            </CardContent>
        </Card >
  );
};
