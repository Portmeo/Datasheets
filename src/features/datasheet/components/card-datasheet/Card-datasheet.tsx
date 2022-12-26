import { useState } from 'react';
import { DatasheetModel } from '@features/datasheet/models/datasheet.model';
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imageNotFound from '@assets/images/imageNotFound.jpg';
import './Card-datasheet.css';
import { CONSTANTS } from '@/shared/constants';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
    return datasheet.workmanship?.reduce((acc, curr) => acc + curr.value, 0) + (datasheet.weight * datasheet.metals.silver.price);
  };

  const subTitle = (
    <div>
       { datasheet.model &&
        <span>{ datasheet.model }</span>
       }
        <br></br>
       <span className="code">{ datasheet.code }</span>
    </div>
  );

  return (
        <Card sx={{ maxWidth: 250 }}>
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
                title={datasheet.name}
                titleTypographyProps={{ variant: 'subtitle1' }}
                subheader={subTitle}
                subheaderTypographyProps={{ variant: 'subtitle2' }}
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
                          actions[a].action(datasheet._id);
                        }}>
                            {actions[a].icon}
                        </MenuItem>
                    ))
                }
            </Menu>
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'>
                <CardMedia
                sx={{ width: 250, height: 250 }}
                component="img"
                image={datasheet.image ?? imageNotFound}
                alt="img"
            />
            </Box>
            <Typography component="p" sx={{ m: 1 }}>{datasheet?.description}</Typography>
            <CardContent className='card-datasheet' sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                <table>
                    <tbody>
                        <tr className='card-datasheet'>
                            <td>{t(CONSTANTS.SILVER)}</td>
                            <Tooltip title={t(CONSTANTS.WEIGHT)} followCursor arrow>
                                <td className='text-rigth'>
                                    {datasheet.weight}
                                </td>
                            </Tooltip>
                            <Tooltip title={t(CONSTANTS.PRICE)} followCursor arrow>
                                <td className='text-rigth'>{datasheet.metals.silver.price}</td>
                            </Tooltip>
                            <td className='text-rigth'>{(datasheet.metals.silver.price * datasheet.weight).toFixed(2)}</td>
                        </tr>
                        {
                            datasheet.workmanship?.map(work => (
                                <tr className='card-datasheet' key={work.name}>
                                    <td colSpan={3}>{work.name}</td>
                                    <td className='text-rigth'>{work.value}</td>
                                </tr>
                            ))
                        }
                        <tr className='card-datasheet'>
                            <td colSpan={3}>{t(CONSTANTS.TOTAL)}</td>
                            <td className='text-rigth'>{getTotal().toFixed(2)}</td>
                        </tr>
                        <tr className='card-datasheet'>
                            <td>{t(CONSTANTS.EXPENSES)}</td>
                            <td className='text-rigth'>{datasheet.expenses}</td>
                            <td className='text-rigth'>{((getTotal() * datasheet.expenses) / 100).toFixed(2)}</td>
                            <td className='text-rigth'>{((getTotal() * datasheet.expenses) / 100 + getTotal()).toFixed(2)}</td>
                        </tr>
                        <tr className='card-datasheet'>
                            <td colSpan={3}>{t(CONSTANTS.PRICE_SALE)}</td>
                            <td className='text-rigth'>{(((getTotal() * datasheet.expenses) / 100 + getTotal()) * 2).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </CardContent>
        </Card >
  );
};
