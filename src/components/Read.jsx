import React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../Context/UserProvider';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const Read = () => {
  const { id } = useParams();
  const [users] = useContext(userContext);

  const user = users.filter((user) => user.id == id)
  return (
    <div>
      <Card>
        <Card.Header>Id: {user[0].id}</Card.Header>
        <Card.Body>
          <p>Name: {user[0].name}</p>
          <p>Position: {user[0].position}</p>
          <p>Salary: {user[0].salary}</p>
        </Card.Body>
      </Card>
      <Link to='/' className='text-end d-block m-1'>
        <Button variant='primary '>
          <FaArrowAltCircleLeft/> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Read;