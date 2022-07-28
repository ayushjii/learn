import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardMain({
    title="jash",
    para="a f afjh fkaw fkaw fawfkafwkafafj ffa j a rawr   ra hawrr  a r rha roaro",
    btn="click me"
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{para}</Card.Text>
        <Button variant="primary">{btn}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMain;