import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
//import products from '../products.js';
import Product from '../components/Product';
import { listProducts } from '../store/actions/productAction.js';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(listProducts);
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {productList.loading ? (
        <Loader />
      ) : productList.error ? (
        <Message variant='danger'>{productList.error}</Message>
      ) : (
        <Row>
          {productList.products.map((item, index) => (
            <Col key={index} sm={12} md={4} lg={4} xl={3}>
              <Product item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
