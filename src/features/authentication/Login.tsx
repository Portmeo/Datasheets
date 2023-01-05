import { Box, Button, FormControl, TextField } from '@mui/material';
import { CONSTANTS } from '@/shared/constants';
import { useTranslation } from 'react-i18next';
import { useLogin } from './hooks/login';

export const Login = () => {
  const { t } = useTranslation();

  const { userEmail, setUserEmail, userPassword, setUserPassword, login } = useLogin();

  const handlerSubmit = () => {
    login(userEmail, userPassword);
  };

  return (
     <Box sx={{ mt: 1, width: { xs: '100%', md: '100%', lg: '100%' } }}
      display="flex"
      flexDirection="column"
      alignItems="center">
      <FormControl
        margin="normal">
        <TextField
          size="small"
          label={t(CONSTANTS.USER)}
          value={userEmail}
          onChange={({ target }) => setUserEmail(target.value)} />
      </FormControl>
      <FormControl
        margin="normal">
        <TextField
          type="password"
          size="small"
          label={t(CONSTANTS.PASSWORD)}
          value={userPassword}
          onChange={({ target }) => setUserPassword(target.value)} />
      </FormControl>
      <Button
          disabled={!userEmail || !userPassword}
          sx={{ mt: 1 }}
          variant="contained"
          onClick={handlerSubmit}>
          {t(CONSTANTS.LOGIN)}
        </Button>
    </Box>
  );
};
