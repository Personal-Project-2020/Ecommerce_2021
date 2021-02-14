import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = (props) => {
  const { item } = props;

  return (
    <div>
      <Card className='my-3 p-4 rounded'>
        <a href={`/product/${item._id}`}>
          <Card.Img src={item.image} />
        </a>
        <Card.Body>
          <a href={`/product/${item._id}`}>
            <Card.Title>
              <strong>{item.name}</strong>
            </Card.Title>
          </a>
          <Card.Text>
            <Rating value={item.rating} text={`${item.rating} reviews`} />
          </Card.Text>
          <Card.Text as='h3'>${item.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
