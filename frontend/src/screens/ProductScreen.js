import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating.js';
import { itemProduct } from '../store/actions/productByIdAction.js';
import Loader from '../components/Loader.js';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemProduct);
  useEffect(() => {
    dispatch(itemProduct(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Home Page
      </Link>
      {itemList.productListById.loader ? (
        <Loader />
      ) : (
        <Row>
          <Col md={3}>
            <Image
              src={itemList.productListById.image}
              alt={itemList.productListById.name}
              fluid
            />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{itemList.productListById.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={itemList.productListById.rating}
                  text={`${itemList.productListById.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                price : ${itemList.productListById.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description : {itemList.productListById.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card>
              <ListGroup.Item>
                <Row>
                  <Col> price:</Col>
                  <Col>
                    <strong>${itemList.productListById.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>status:</Col>
                  <Col>
                    {itemList.productListById.countInStock > 1
                      ? 'In stock'
                      : 'out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    className='btn-black'
                    type='button'
                    disabled={itemList.productListById.countInStock === 0}
                  >
                    Add TO Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default ProductScreen;
