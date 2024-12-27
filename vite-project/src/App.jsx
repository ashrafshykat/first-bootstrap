import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

export default function App() {
  
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setUser(data.users))
  }, [])
  console.log(users);
  return (
    <>
    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    <div className="d-flex flex-wrap justify-content-around">
    {
      users.map((user) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Img variant="top" src={user.image} />
            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
            <Card.Text>
              {user.email}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))
    }
    </div>
    
    </>
  )
}
