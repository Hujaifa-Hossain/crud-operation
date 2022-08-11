import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { userContext } from '../Context/UserProvider';
import { FaTrash, FaEye, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useContext(userContext);
  console.log(users)
  return (
    <div>
      <Button variant="primary">Create User +</Button>

      <Table striped bordered hover size="sm" className='my-3 text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user) => <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.position}</td>
            <td>{user.salary}</td>
            <td>
              <Button className='m-1' variant="outline-success"><FaEye /></Button>
              <Button className='m-1' variant="outline-primary"><FaUserEdit /></Button>
              <Link to={`delete`/+user.id}>
              <Button className='m-1' variant="outline-danger"><FaTrash /></Button>
              </Link>
            </td>
          </tr>)}


        </tbody>
      </Table>
    </div>
  );
}

export default Home;