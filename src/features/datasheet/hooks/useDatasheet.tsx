import { AlertService } from '@core/alert.service';
import { CONSTANTS } from '@shared/constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DatasheetModel } from '@features/datasheet/models/datasheet.model';
import { DatasheetService } from '@features/datasheet/services/datasheet.service';

interface Actions {
    [key: string]: {
        icon?: JSX.Element,
        action: (...params: any) => void
    }
};

export const useDatasheet = () => {
  const redirect = useNavigate();
  const [datasheets, setDatasheets] = useState<DatasheetModel[]>([]);
  const [deleteDatasheet, setDeleteDatasheet] = useState<string>('');

  const fetchDatasheets = async () => {
    const response = await DatasheetService.getAll();
    response && setDatasheets(response);
  };

  const onDeleteDatasheet = async (id: string) => {
    const response = await DatasheetService.delete(id);
    if (response) {
      setDatasheets(prevDatasheets => prevDatasheets.filter(d => d.id !== id));
      setDeleteDatasheet('');
    }
  };

  const actionsModal: Actions = {
    cancel: {
      action: () => setDeleteDatasheet('')
    },
    confirm: {
      action: (id: string) => onDeleteDatasheet(id)
    }
  };

  const actionsCard: Actions = {
    edit: {
      icon: CONSTANTS.ICONS.EDIT,
      action: (id: string) => redirect(id)
    },
    delete: {
      icon: CONSTANTS.ICONS.DELETE,
      action: (id: string) => setDeleteDatasheet(id)
    }
  };

  useEffect(() => {
    fetchDatasheets();
  }, []);

  useEffect(() => {
    return () => {
      AlertService.reset();
    };
  });

  return {
    datasheets,
    deleteDatasheet,
    actionsModal,
    actionsCard
  };
};
