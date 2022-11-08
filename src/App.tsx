import { Suspense } from 'react';
import './App.css';
import { Layout } from './layout/Layout';
import { Router } from './Router';
import { Loader } from './shared/components/loader/Loader';
import { useSelector } from 'react-redux';
import { loaderSelect } from './state/reducers/loader';

function App() {
  // const loader = useSelector(loaderSelect);
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader container='lazyloader'/>}>
          <Router />
        </Suspense>
      </Layout>
      {/* { loader && <Loader /> } */}
    </>
  )
}

export default App
