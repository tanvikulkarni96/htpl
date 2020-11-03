import React, { PureComponent } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = () => {
  return (
    <Carousel className="main-slider">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../images/slider1.png"
          alt="First slide"
          height="400px"
          width="50px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../images/slider2.jpg"
          alt="Third slide"
          height="400px"
          width="50px"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/slider3.jpg"
          alt="Third slide"
          height="400px"
          width="50px"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
