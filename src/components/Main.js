import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

export default function Main() {
  return (
    <main>
        <Row className='h-100 '>
            <Col sm={4} className='r_tbdr' >Aside</Col>
            
            <Outlet />
        </Row>
    </main>
  )
}
