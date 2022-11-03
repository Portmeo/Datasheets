import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Category } from '@/features/category/Category';
import { DataSheet } from '@/features/data-sheet/DataSheet';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DataSheet />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
