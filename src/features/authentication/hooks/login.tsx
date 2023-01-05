import { useState } from 'react';
import { AuthenticationService } from '../services/authentication.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '@/state/reducers/user';

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const login = async (email: string, password: string) => {
    const response = await AuthenticationService.login({ email, password });
    if (response) {
      window.localStorage.setItem(
        'token', JSON.stringify(response.access_token)
      );
      window.localStorage.setItem(
        'user', JSON.stringify(response.user)
      );
      dispatch(userActions.setUser(response.user));
      navigate('/datasheet');
    }
  };

  return {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    login
  };
};
