import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../Context/UserProvider';
import { FaArrowAltCircleLeft, FaUserEdit } from 'react-icons/fa';

const Update = () => {
  const [users, setUsers] = useContext(userContext)
  const { id } = useParams()

  const user = users.filter(user=> user.id == id)
  const [name, setName] = useState(user[0].name);
  const [position, setPosition] = useState(user[0].position);
  const [salary, setSalary] = useState(user[0].salary);

  const updatedName = (e) => {
    setName(e.target.value);
    const editedName = name;
    user[0].name = editedName;
  }

  const updatedPosition = (e) => {
    setPosition(e.target.value);
    const editedPosition = position;
    user[0].position = editedPosition;
  }
  const updatedSalary = (e) => {
    setSalary(e.target.value);
    const editedSalary = salary;
    user[0].salary = editedSalary
  }

  const updateUser = e => {
    e.preventDefault();
    setUsers([...users])
  }

  return (
    <div>
      <h5 className="btn btn-primary px-4 fs-5 text-uppercase">Id: {users[0].id}</h5>

      <Form onSubmit={updateUser}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter naame" value={name} onChange={updatedName} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter position" value={position} onChange={updatedPosition} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter salary" value={salary} onChange={updatedSalary} required />
        </Form.Group>


        <span className='d-block text-end'>
          <Link to='/' className='m-1'>
          <Button variant="success" type="submit" className='m-1'>
            Edit <FaUserEdit/>
          </Button>
            <Button variant='primary m-1'>
              <FaArrowAltCircleLeft /> Back to Home
            </Button>
          </Link>
        </span>
      </Form>
    </div>
  );
};

export default Update;