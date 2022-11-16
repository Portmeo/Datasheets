import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DatasheetModel, NewDatasheetModel, Workmanship } from '@features/datasheet/models/datasheet.model';
import { DatasheetService } from '@features/datasheet/services/datasheet.service';
import { AlertService } from '@core/alert.service';
import { CategoryService } from '@features/category/services/category.service';
import { CategoryModel } from '@features/category/models/category.model';

export const useDatasheetForm = () => {
  const { id } = useParams();
  const [datasheet, setDatasheet] = useState<any>();
  const [categoryOptions, setCategoryOptions] = useState<CategoryModel[]>([]);
  const [categorySelect, setCategorySelect] = useState<string[]>([]);
  const [workmanship, setWorkmanship] = useState<Workmanship>({ name: '', value: 0 });

  const fetchCategories = async () => {
    const response = await CategoryService.getAll();
    response && setCategoryOptions(response);
  };

  const fetchDatasheet = async (id: string) => {
    const response = await DatasheetService.get(id);
    if (response) {
      setDatasheet(response);
      setCategorySelect(response.categories.map(category => category.id));
    }
  };

  const createDatasheet = async (datasheet: NewDatasheetModel) => {
    const response = await DatasheetService.create(datasheet);
    if (response) {
      processSuccess();
      setDatasheet(undefined);
    }
  };

  const updateDatasheet = async (datasheet: DatasheetModel) => {
    const response = await DatasheetService.update(datasheet);
    response && processSuccess();
  };

  const processSuccess = () => {
    AlertService.proccesSuccess();
  };

  useEffect(() => {
    fetchCategories();
    id && id !== 'new' && fetchDatasheet(id);
  }, []);

  useEffect(() => {
    return () => {
      AlertService.reset();
    };
  });

  return {
    categoryOptions,
    categorySelect,
    setCategorySelect,
    workmanship,
    setWorkmanship,
    datasheet,
    setDatasheet,
    createDatasheet,
    updateDatasheet,
    id
  };
};
