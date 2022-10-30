import { Button } from '@mui/material';
import './App.css';
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
