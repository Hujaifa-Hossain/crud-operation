import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useContext } from 'react';
import { userContext } from '../Context/UserProvider';

const Create = () => {

  const [users, setUsers] = useContext(userContext)

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState('')

  const updatedId = (e) => {
    setId(e.target.value);
  }
  const updatedName = (e) => {
    setName(e.target.value);
  }

  const updatedPosition = (e) => {
    setPosition(e.target.value);
  }
  const updatedSalary = (e) => {
    setSalary(e.target.value);
  }

  const addUser = (e) =>{
    setUsers([...users, {id:id, name:name, position:position, salary:salary}])
    e.preventDefault();

    setId('')
    setName('')
    setPosition('')
    setSalary('')
    
    if (id && name && position && salary) {
      return alert("Are you sure you want to create this user?")
   }
  }

  return (
    <div>
      <Form onSubmit={addUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter id number" value={id} onChange={updatedId} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter naame" value={name} onChange={updatedName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter position" value={position} onChange={updatedPosition} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter salary" value={salary} onChange={updatedSalary} />
        </Form.Group>


        <span className='d-block text-end'>
          <Button variant="success" type="submit" className='m-1'>
            Create User
          </Button>
          <Link to='/' className='m-1'>
            <Button variant='primary '>
              <FaArrowAltCircleLeft /> Back to Home
            </Button>
          </Link>
        </span>
      </Form>
    </div>
  );
};

export default Create;