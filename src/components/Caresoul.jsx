import { Carousel } from "react-bootstrap";
import React from "react";

const Caresoul = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="images/image1.jpg"
            alt="first slide"
            height={"500"}
           />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="d-block w-100"
            src="images/image2.jpg"
            alt="first slide"
            height={"500"}
           />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="d-block w-100"
            src="images/image3.jpg"
            alt="first slide"
            height={"500"}
           />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Caresoul;
