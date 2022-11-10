import { Suspense } from 'react';
import './App.css';
import { Layout } from './layout/Layout';
import { Router } from './Router';
import { Loader } from './shared/components/loader/Loader';

function App() {
  return (
    <>
      <Layout>
          <Suspense fallback={<Loader container='lazyloader' />}>
            <Router />
          </Suspense>
      </Layout>
    </>
  )
}

export default App
