import PropTypes from 'prop-types';
import * as Mui from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { CONSTANTS } from '@/shared/constants';

interface Row {
    id: string;
    [key: string]: string;
};

interface Actions {
    [key: string]: {
        icon?: JSX.Element,
        action: (...params: any) => void
    }
};

interface Props {
    rows: Row[];
    actions?: Actions;
};

export const Table = ({ rows, actions }: Props) => {
    const fieldsRow = rows.length ? Object.keys(rows[0]) : undefined;
    const fieldsActions = actions ? Object.keys(actions) : undefined;

    return (
        <>
            {fieldsRow &&
                <TableContainer component={Paper}>
                    <Mui.Table sx={{ minWidth: 650 }} aria-label="table">
                        <TableHead>
                            <TableRow sx={{
                                "& th": {
                                    color: "white",
                                    backgroundColor: "#1976D2"
                                }
                            }}>
                                {
                                    fieldsRow.map(key => (
                                        <TableCell key={key}>{key.toUpperCase()}</TableCell>
                                    ))
                                }
                                {

                                    actions && <TableCell align="right">{CONSTANTS.ACTIONS.toUpperCase()}</TableCell>
                                }

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.map((row: Row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {
                                            fieldsRow.map(field => (
                                                <TableCell key={field}>{row[field]}</TableCell>
                                            ))
                                        }
                                        {

                                            (actions && fieldsActions) &&
                                            <TableCell align="right">
                                                {
                                                    fieldsActions.map(a => (
                                                        <IconButton key={a} onClick={() => actions[a].action(row.id)}>
                                                            {actions[a].icon}
                                                        </IconButton>
                                                    ))
                                                }
                                            </TableCell>
                                        }
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Mui.Table>
                </TableContainer>
            }
        </>
    )
};

Table.propTypes = {
    rows: PropTypes.array,
    actions: PropTypes.object
}
