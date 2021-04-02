import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message.js';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

import { cartAction } from '../store/actions/cartAction.js';

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);

  console.log(cartList.cartCollection);
  let qty = location.search ? Number(location.search.split('=')[1]) : 1;
  useEffect(() => {
    dispatch(cartAction(productId, qty));
  }, [dispatch, qty, productId]);
  const removeFromCartHandler = (id) => {
    console.log('Removed from cart');
  };
  return (
    <div>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartList.cartCollection.length === 0 ? (
          <Message>
            your cart is empty <Link to='/'>go Back</Link>{' '}
          </Message>
        ) : (
          <ListGroup variant='flush'></ListGroup>
        )}
      </Col>
      <Col md={2}>
        {cartList.cartCollection.map((item) => (
          <ListGroup.Item key={item.product}>
            <Row>
              <Col md={8}>
                <Image src={item.image} alt={item.name} fluid rounded />
              </Col>
              <Col md={3}>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <Col md={3}>{item.price}</Col>
                <Col md={3}>
                  {/* <Form.Control
                    as='select'
                    value={qty}
                    onChange={(e) =>
                      dispatch(cartAction(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.productListById.countInStock).keys()].map(
                      (item) => (
                        <option key={item + 1} value={item + 1}>
                          {item + 1}
                        </option>
                      )
                    )}
                  </Form.Control> */}
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => removeFromCartHandler(item.product)}
                  ></Button>
                </Col>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </Col>
    </div>
  );
};
export default CartScreen;
