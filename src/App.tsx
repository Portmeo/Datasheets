import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Layout } from './layout/Layout';
import { Router } from './Router';
import { Loader } from './shared/components/loader/Loader';
import { userActions, userSelect } from './state/reducers/user';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelect);
  if (!user) {
    const userStorage = window.localStorage.getItem('user');
    if (userStorage) {
      dispatch(userActions.setUser(JSON.parse(userStorage)));
    }
  }
  return (
    <Layout>
        <Suspense fallback={<Loader container='lazyloader' />}>
          <Router user={user}/>
        </Suspense>
    </Layout>
  );
};

export default App;
