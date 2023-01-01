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
      setCategorySelect(response.categories.map((category: any) => category._id));
    }
  };

  const initValuesDatasheet = () => {
    const workmanship = [
      { name: 'Fundicion', value: 0 },
      { name: 'Repasado', value: 0 },
      { name: 'Plateado', value: 0 },
      { name: 'Tallado', value: 0 }
    ];

    const metals = {
      silver: {
        price: 0
      },
      gold: {
        price: 0
      }
    };
    setDatasheet(
      {
        expenses: 0,
        weight: 0,
        workmanship,
        metals
      }
    );
  };

  const createDatasheet = async (datasheet: NewDatasheetModel) => {
    const response = await DatasheetService.create(valuesToNumbers(datasheet));
    if (response) {
      setDatasheet(undefined);
      setCategorySelect([]);
      setWorkmanship({ name: '', value: 0 });
      processSuccess();
      initValuesDatasheet();
    }
  };

  const updateDatasheet = async (datasheet: DatasheetModel) => {
    const response = await DatasheetService.update(valuesToNumbers(datasheet));
    response && processSuccess();
  };

  const processSuccess = () => {
    AlertService.proccesSuccess();
  };

  const valuesToNumbers = (datasheet: DatasheetModel) => {
    const copyDataSheet = JSON.parse(JSON.stringify(datasheet));
    copyDataSheet.metals.silver.price = +copyDataSheet.metals.silver.price;
    if (copyDataSheet.metals.gold) {
      copyDataSheet.metals.gold.price = +datasheet.metals.gold!.price;
    }

    copyDataSheet.workmanship.forEach((w:Workmanship) => {
      w.value = +w.value;
    });

    return copyDataSheet;
  };

  useEffect(() => {
    fetchCategories();
    id && id !== 'new' && fetchDatasheet(id);
    id && id === 'new' && initValuesDatasheet();
  }, []);

  useEffect(() => {
    return () => {
      AlertService.reset();
    };
  }, []);

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
