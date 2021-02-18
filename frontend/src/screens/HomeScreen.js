import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products.js';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item, index) => (
          <Col key={index} sm={12} md={4} lg={4} xl={3}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
