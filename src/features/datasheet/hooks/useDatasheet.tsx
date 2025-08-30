import { AlertService } from '@core/alert.service';
import { CONSTANTS } from '@shared/constants';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DatasheetModel } from '@features/datasheet/models/datasheet.model';
import { DatasheetService } from '@features/datasheet/services/datasheet.service';
import { filtersSelect, filtersActions } from '@state/reducers/filters';

interface Actions {
    [key: string]: {
        icon?: JSX.Element,
        action: (...params: any) => void
    }
};

export const useDatasheet = () => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelect);
  const [datasheets, setDatasheets] = useState<DatasheetModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteDatasheet, setDeleteDatasheet] = useState<string>('');

  const itemsPerPage = 10;

  // Filtros aplicados con useMemo - React way 🎯
  const datasheetsToShow = useMemo(() => {
    return datasheets.filter(datasheet => {
      // Filtro por categorías
      if (filters.categoryFilter.length === 0) {
        return true;
      }

      const categoriesDatasheet = datasheet.categories as string[];
      return filters.categoryFilter.some(category => categoriesDatasheet.includes(category));
    }).filter(datasheet => (
      // Filtro por búsqueda
      datasheet.code.toLowerCase().includes(filters.searchFilter) ||
      datasheet.name.toLowerCase().includes(filters.searchFilter) ||
      datasheet.model?.toLowerCase().includes(filters.searchFilter)
    ));
  }, [datasheets, filters.categoryFilter, filters.searchFilter]);

  // Paginación con useMemo - también declarativo
  const datasheetsPaginator = useMemo(() => {
    return {
      page: currentPage,
      list: datasheetsToShow.slice(0, currentPage * itemsPerPage),
      hasMore: datasheetsToShow.length > currentPage * itemsPerPage
    };
  }, [datasheetsToShow, currentPage, itemsPerPage]);

  const fetchDatasheets = async () => {
    const response = await DatasheetService.getAll();
    if (response) {
      setDatasheets(response);
      setCurrentPage(1); // Reset página al cargar datos
    }
  };

  const onDeleteDatasheet = async (id: string) => {
    const response = await DatasheetService.delete(id);
    if (response) {
      // Solo actualizar datasheets, el resto se recalcula automáticamente
      setDatasheets(prevDatasheets => prevDatasheets.filter(d => d._id !== id));
      dispatch(filtersActions.setSearchFilter(''));
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

  // Resetear página cuando cambien los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [filters.categoryFilter, filters.searchFilter]);

  useEffect(() => {
    fetchDatasheets();
  }, []);

  useEffect(() => {
    return () => {
      AlertService.reset();
    };
  });

  const setCategoryFilter = (categories: string[] | ((prev: string[]) => string[])) => {
    if (typeof categories === 'function') {
      dispatch(filtersActions.setCategoryFilter(categories(filters.categoryFilter)));
    } else {
      dispatch(filtersActions.setCategoryFilter(categories));
    }
  };

  const setSearchFilter = (search: string) => {
    dispatch(filtersActions.setSearchFilter(search));
  };

  const clearAllFilters = () => {
    dispatch(filtersActions.clearAllFilters());
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  return {
    datasheets,
    deleteDatasheet,
    actionsModal,
    actionsCard,
    categoryFilter: filters.categoryFilter,
    setCategoryFilter,
    searchFilter: filters.searchFilter,
    setSearchFilter,
    datasheetsPaginator,
    nextPage,
    clearAllFilters,
    totalResults: datasheetsToShow.length // Solo exportamos el count
  };
};
