import React from 'react';
import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../Context/UserProvider';

const Delete = () => {
  const {id} = useParams();
  const [users, setUsers] = useContext(userContext);
  const deleteUser = (id) =>{
    const user = users.filter((user) => user.id != id)
    setUsers(user)
  }
  return (
    <div>
      <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>Are you sure you want to delete?</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Link to='/'>
        <Button variant="primary" className='m-1'>Close</Button>
        <Button onClick={()=> deleteUser(id)} variant="outline-danger" className='m-1'>Delete</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  );
};

export default Delete;