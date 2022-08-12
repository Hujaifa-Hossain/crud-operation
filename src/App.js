import './App.css';
import { Routes, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import UserProvider from './Context/UserProvider';
import Delete from './components/Delete';
import Read from './components/Read';

function App() {
  return (
    <UserProvider>
      <Container className='my-4'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="delete/:id" element={<Delete />} />
        <Route path="read/:id" element={<Read />} />
      </Routes>
    </Container>
    </UserProvider>
  );
}

export default App;
