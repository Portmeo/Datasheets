import { Link } from 'react-router-dom';
import { Modal } from '@shared/components/modal/Modal';
import { CONSTANTS } from '@shared/constants';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Tooltip, IconButton, FormControl, TextField } from '@mui/material';
import { CardDatasheet } from './components/card-datasheet/Card-datasheet';
import { useDatasheet } from './hooks/useDatasheet';
import { DatasheetModel } from './models/datasheet.model';
import './Datasheet.css';
import { ChangeEvent } from 'react';
import { FilterCategory } from './components/filter-category/FIlter-category';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '@/shared/components/loader/Loader';

export const Datasheet = () => {
  const { t } = useTranslation();
  const {
    deleteDatasheet, actionsModal, actionsCard,
    datasheetsToShow, setCategoryFilter, setSearchFilter,
    datasheetsPaginator, setDatasheetsPaginator, searchFilter
  } = useDatasheet();

  const handlerSearch = () => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value?.toLowerCase();
      setSearchFilter(value);
    };
  };

  const handlerCategory = (idCategory: string) => {
    setCategoryFilter((prevFilter: string[]) => {
      let categories: string[] = [...prevFilter];
      if (categories.includes(idCategory)) {
        categories = categories.filter(category => category !== idCategory);
      } else {
        categories.push(idCategory);
      }
      return categories;
    });
  };

  const nextPage = () => {
    const page = datasheetsPaginator.page + 1;
    setDatasheetsPaginator({ page, list: datasheetsToShow.slice(0, page * 10) });
  };

  return (
    <Box display="flex"
        flexDirection="column">
        <Box display="flex"
             justifyContent="flex-end">
            <Link to="new">
                <Tooltip title={`${t(CONSTANTS.CREATE)}  ${t(CONSTANTS.DATASHEET)}`}>
                    <IconButton>
                        {CONSTANTS.ICONS.ADD}
                    </IconButton>
                </Tooltip>
            </Link>
        </Box>

    <Box
      display="flex"
      sx={{ mt: 1, flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}>
        <Box display="flex"
            sx={{ mt: 3, width: { xs: '100%', md: '20%', lg: '15%' } }}>
            <FilterCategory filterAction={handlerCategory}/>
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            sx={{ mt: 1, width: { xs: '100%', md: '80%', lg: '85%' } }}>
            <Box sx={{ mt: 1, width: { xs: '100%', md: '50%', lg: '50%' } }}>
                <FormControl
                    fullWidth
                    margin="normal">
                    <TextField
                    size="small"
                    label={t(CONSTANTS.SEARCH)}
                    value={searchFilter}
                    onChange={handlerSearch()} />
                </FormControl>
                <Typography component="p">{ datasheetsToShow.length } Resultados</Typography>
            </Box>
            <Box
                display='flex'
                flexWrap='wrap'
                sx={{ mt: 1, justifyContent: { xs: 'center', md: 'flex-start', lg: 'flex-start' } }}>
                  <InfiniteScroll
                    dataLength={datasheetsPaginator.list.length}
                    next={nextPage}
                    hasMore={datasheetsPaginator.list.length < datasheetsToShow.length}
                    style={{ display: 'flex', flexWrap: 'wrap' }}
                    loader={<Loader/>}
                  >
                    {
                      datasheetsPaginator.list.map((datasheet: DatasheetModel) => (
                        <Box key={datasheet._id} sx={{ m: 1 }}>
                            <CardDatasheet datasheet={datasheet} actions={actionsCard} />
                        </Box>
                      ))
                    }
                  </InfiniteScroll>
            </Box>
            {deleteDatasheet &&
                <Modal isOpen={!!deleteDatasheet} handlerClose={actionsModal.cancel.action}>
                    <Box>
                        <Typography component="div" sx={{ flexGrow: 1 }} >{t(CONSTANTS.MESSAGE_ACTIONS.DELETE)}</Typography>
                        <Box className='actions-modal'>
                            {
                                actionsModal &&
                                Object.keys(actionsModal).map(action => <Button key={action} variant="contained" onClick={() => actionsModal[action].action(deleteDatasheet)}>{t(action)}</Button>)
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </Box>
    </Box>
    </Box>
  );
};
