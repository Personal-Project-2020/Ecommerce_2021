import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products.js';
import Product from '../components/Product';

const HomeScreen = () => {
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
