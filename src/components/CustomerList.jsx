import React from 'react'
import Customer from './Customer'
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CustomerList = (props) => {
  const cant = props.customers 
  return (
    // <Row xs={1} md={2} className="g-4">
    //   {Array.from({ length: 4 }).map((_, idx) => (
    //     <Col>
    //       {cant.map((customer) =>
    //       <Customer data = {customer}></Customer> )
    //       }
    //     </Col>
    //   ))}
    // </Row>
    <div style={{background: '#aeaeae', padding: '20px 0px'}}>
      <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {cant.map((customer) => <Customer data = {customer} style={{minWidth: '270px'}}></Customer> )}
      </div>
    </div>
  );
}

export default CustomerList