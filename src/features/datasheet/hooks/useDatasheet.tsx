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
  const [datasheetsToShow, setDatasheetsToShow] = useState<DatasheetModel[]>([]);
  const [datasheetsPaginator, setDatasheetsPaginator] = useState<{ page: number, list: DatasheetModel[] }>({ page: 0, list: [] });
  const [deleteDatasheet, setDeleteDatasheet] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const fetchDatasheets = async () => {
    const response = await DatasheetService.getAll();
    if (response) {
      setDatasheets(response);
      setDatasheetsToShow(response);
      setDatasheetsPaginator({ page: 1, list: response.slice(0, 10) });
    }
  };

  const onDeleteDatasheet = async (id: string) => {
    const response = await DatasheetService.delete(id);
    if (response) {
      setDatasheets(prevDatasheets => prevDatasheets.filter(d => d._id !== id));
      setDatasheetsToShow(prevDatasheets => prevDatasheets.filter(d => d._id !== id));
      setSearchFilter('');
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

  const applyFilters = () => {
    const datasheetsList = datasheets.filter(datasheet => {
      let control = true;
      const categoriesDatasheet = datasheet.categories as string[];
      categoryFilter.forEach(category => {
        control = categoriesDatasheet.includes(category);
      });
      return control;
    }).filter(datasheet => (
      datasheet.code.toLowerCase().includes(searchFilter) ||
      datasheet.name.toLowerCase().includes(searchFilter) ||
      datasheet.model?.toLowerCase().includes(searchFilter)
    ));
    setDatasheetsToShow(datasheetsList);
    setDatasheetsPaginator({ page: 1, list: datasheetsList.slice(0, 10) });
  };

  useEffect(() => {
    applyFilters();
  }, [categoryFilter, searchFilter]);

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
    actionsCard,
    datasheetsToShow,
    setDatasheetsToShow,
    categoryFilter,
    setCategoryFilter,
    searchFilter,
    setSearchFilter,
    datasheetsPaginator,
    setDatasheetsPaginator
  };
};
