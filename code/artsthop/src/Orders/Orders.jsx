import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Orders.css'

const Orders = () => {

  const [imagesData, setImagesData] = useState();
  const [searchVal, setSearchVal] = useState();

  const getOrders = async () => {
    console.log('searchvall??', searchVal)
    try {
      const res = await axios.get(`http://localhost:3000/getorders/${searchVal}`,
      );
      setImagesData(res.data);
      console.log(res.data[1].cart[0]['id'])

    } catch (e) {
      console.log(e);
    }
  };

  const DisplayCard = ( { order } ) => {
    console.log('orderis', order.cart[0])
    return (
      <div className="search-card">
        <img className="order-image" src={order.cart[0]['img1']} alt='order image'/>
        <div class="order-text">
          <h4><b>{order.firstName} {order.lastName}</b></h4>
          <p>{order.cart[0]['title']}</p>
          <p>{order.cart[0]['description']}</p>
          <p>${order.cart[0]['price']}</p>
          <p style={{ color: 'green' }}>Shipping soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="orders-container">
      <h3>Orders</h3>
      <div className="search-form">
        <label>Please enter your email id</label>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="abc@example.com"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Button onClick={() => getOrders()} variant="dark">Search</Button>
        </Form>
      </div>
      {imagesData ? imagesData.map(img => (
        <DisplayCard order={img} />
      )) : ''}

    </div>
  )
}

export default Orders