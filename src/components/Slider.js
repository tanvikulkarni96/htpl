import React, { PureComponent } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";

export const Slider = () => {
  return (
    <Carousel className="main-slider">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slider1}
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
          src={slider2}
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
          src={slider3}
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
