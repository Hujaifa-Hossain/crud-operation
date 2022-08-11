import './App.css';
import { Routes, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import UserProvider from './Context/UserProvider';
import Delete from './components/Delete';

function App() {
  return (
    <UserProvider>
      <Container className='my-4'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="delete/:id" element={<Delete />} />
      </Routes>
    </Container>
    </UserProvider>
  );
}

export default App;
