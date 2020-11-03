import React, { PureComponent } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

export const Cards = () => {
  return (
    <CardDeck className="card-deck">
      <Card bg="secondary" text="white">
        <Card.Img variant="top" src="../images/sample.png" />
        <Card.Body>
          <Card.Title>Co Working Spaces</Card.Title>
          <Card.Text>One Line info about co working spaces.</Card.Text>
          <Button variant="light">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card bg="secondary" text="white">
        <Card.Img variant="top" src="../images/sample.png" />
        <Card.Body>
          <Card.Title>AR/VR</Card.Title>
          <Card.Text>Information about AR/VR services.</Card.Text>
          <Button variant="light">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card bg="secondary" text="white">
        <Card.Img variant="top" src="../images/sample.png" />
        <Card.Body>
          <Card.Title>Speciality Serivces</Card.Title>
          <Card.Text>Information about apeciality services</Card.Text>
          <Button variant="light">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};
