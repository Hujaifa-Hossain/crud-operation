import UserProvider from './Context/UserProvider';
import { Routes, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <UserProvider>
      <Container className='my-4'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="read/:id" element={<Read />} />
        <Route path="update/:id" element={<Update />} />
        <Route path="delete/:id" element={<Delete />} />
      </Routes>
    </Container>
    </UserProvider>
  );
}

export default App;
