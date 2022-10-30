import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { Get } from './core/requestHandler';
import { Modal } from './shared/components/modal/Modal';

function App() {  

  return (
    <div className="App">
      <Button variant="contained">Text</Button>
      <Modal>
        <h1>Modal</h1>
      </Modal>
    </div>
  )
}

export default App
