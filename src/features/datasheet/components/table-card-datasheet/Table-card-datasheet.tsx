import { DatasheetModel } from '@features/datasheet/models/datasheet.model';
import { Tooltip } from '@mui/material';
import './Table-card-datasheet.css';
import { CONSTANTS } from '@/shared/constants';
import { useTranslation } from 'react-i18next';

interface Props {
    datasheet: DatasheetModel;
}

export const TableCardDatasheet = ({ datasheet }: Props) => {
  const { t } = useTranslation();
  const getTotal = () => {
    const total = datasheet.workmanship?.reduce((acc, curr) => +acc + +curr.value, 0) + (datasheet.weight * datasheet.metals.silver.price);
    return isNaN(total) ? 0 : total;
  };

  return (
        <>
            { datasheet && <div className='table-card-datasheet'>
                <table>
                    <tbody>
                        <tr className='table-card-datasheet'>
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
                                <tr className='table-card-datasheet' key={work.name}>
                                    <td colSpan={3}>{work.name}</td>
                                    <td className='text-rigth'>{work.value}</td>
                                </tr>
                            ))
                        }
                        <tr className='table-card-datasheet'>
                            <td colSpan={3}>{t(CONSTANTS.TOTAL)}</td>
                            <td className='text-rigth'>{getTotal().toFixed(2)}</td>
                        </tr>
                        <tr className='table-card-datasheet'>
                            <td>{t(CONSTANTS.EXPENSES)}</td>
                            <td className='text-rigth'>{datasheet.expenses}</td>
                            <td className='text-rigth'>{((getTotal() * datasheet.expenses) / 100).toFixed(2)}</td>
                            <td className='text-rigth'>{((getTotal() * datasheet.expenses) / 100 + getTotal()).toFixed(2)}</td>
                        </tr>
                        <tr className='table-card-datasheet'>
                            <td colSpan={3}>{t(CONSTANTS.PRICE_SALE)}</td>
                            <td className='text-rigth'>{(((getTotal() * datasheet.expenses) / 100 + getTotal()) * 2).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </>
  );
};
