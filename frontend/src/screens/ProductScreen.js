import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating.js';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    getData();
  }, [match]);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        {' '}
        Home Page
      </Link>
      <Row>
        <Col md={3}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup.Item>
              <Row>
                <Col> price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>status:</Col>
                <Col>
                  {product.countInStock > 1 ? 'In stock' : 'out of stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button
                  className='btn-black'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add TO Cart
                </Button>
              </Row>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductScreen;
