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
    setCategoryFilter, setSearchFilter, datasheetsPaginator,
    nextPage, searchFilter, clearAllFilters, totalResults
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
        {/* Filtro desktop en sidebar */}
        <Box 
            display={{ xs: 'none', md: 'flex' }}
            sx={{ mt: 3, width: { md: '20%', lg: '15%' } }}>
            <FilterCategory filterAction={handlerCategory}/>
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            sx={{ mt: 1, width: { xs: '100%', md: '80%', lg: '85%' } }}>
            
            {/* Filtro mobile junto con búsqueda */}
            <Box display={{ xs: 'block', md: 'none' }} sx={{ mb: 2 }}>
                <FilterCategory filterAction={handlerCategory}/>
            </Box>

            <Box sx={{ mt: 1, width: { xs: '100%', md: '50%', lg: '50%' } }}>
                <Box display="flex" alignItems="center" gap={1}>
                    <FormControl
                        fullWidth
                        margin="normal">
                        <TextField
                        size="small"
                        label={t(CONSTANTS.SEARCH)}
                        value={searchFilter}
                        onChange={handlerSearch()} />
                    </FormControl>
                    <Tooltip title={t(CONSTANTS.CLEAR_FILTERS)}>
                        <IconButton
                            onClick={clearAllFilters}
                            sx={{ mt: 1 }}>
                            {CONSTANTS.ICONS.CLEAR}
                        </IconButton>
                    </Tooltip>
                </Box>
                <Typography component="p">{ totalResults } Resultados</Typography>
            </Box>
            <Box
                display='flex'
                flexWrap='wrap'
                sx={{ mt: 1, justifyContent: { xs: 'center', md: 'flex-start', lg: 'flex-start' } }}>
                  <InfiniteScroll
                    dataLength={datasheetsPaginator.list.length}
                    next={nextPage}
                    hasMore={datasheetsPaginator.hasMore}
                    style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      width: '100%'
                    }}
                    loader={<Loader/>}
                  >
                    {
                      datasheetsPaginator.list.map((datasheet: DatasheetModel) => (
                        <Box 
                          key={datasheet._id} 
                          sx={{ 
                            m: { xs: 1, sm: 1 },
                            width: { xs: '100%', sm: 'auto' },
                            maxWidth: { xs: '100%', sm: 250 }
                          }}>
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
