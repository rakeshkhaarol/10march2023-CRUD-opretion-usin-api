import React from 'react'
import {Nav} from 'react-bootstrap'

function Nevigetion() {
  return (
    <>
        <Nav>
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  href='/register'>Register</Nav.Link>
        </Nav.Item>
        </Nav>
    </>
  )
}

export default Nevigetion