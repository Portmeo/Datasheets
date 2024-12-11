import { useState } from 'react';
import { DatasheetModel } from '@features/datasheet/models/datasheet.model';
import { Box, Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imageNotFound from '@assets/images/imageNotFound.jpg';
import './Card-datasheet.css';
import { TableCardDatasheet } from '../table-card-datasheet/Table-card-datasheet';
import { useSelector } from 'react-redux';
import { userSelect } from '@/state/reducers/user';
import { CONSTANTS } from '@/shared/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const BASE_URL = import.meta.env.VITE_BASE_URL;

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
  const user = useSelector(userSelect);
  const fieldsActions = actions ? Object.keys(actions) : undefined;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const image = `${BASE_URL}/proxy?url=${encodeURIComponent(datasheet.image)}`;
  const handleClose = () => {
    setAnchorEl(null);
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
            { user.role !== CONSTANTS.ROLES.GUEST &&
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
            }
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'>
                <LazyLoadImage
                    src={ image ?? imageNotFound}
                    width={250} height={250}
                />
            </Box>
            <Typography component="p" sx={{ m: 1 }}>{datasheet?.description}</Typography>
            <CardContent className='card-datasheet' sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                <TableCardDatasheet datasheet={datasheet}/>
            </CardContent>
        </Card >
  );
};
