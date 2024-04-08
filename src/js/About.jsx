import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <section id="about" className="about-content">
      <Container className='mt-5'>
        <h1 className="text-center">About Us</h1>
        <Row>
          <Col className="about-container" xs={8} md={8}>
            <p className="p1">
              Welcome to AP Home Services, your trusted partner in construction and home improvement. With a commitment to excellence and a focus on customer satisfaction, we bring your vision to life. Our dedicated team of professionals is here to make your dream home a reality.
            </p>
            <p className="p2">
              We are located in the Twin Cities area, serving the metro with dedication.
            </p>
            <h3>Our Partners</h3>
            <ul>
              <li><a href="https://www.andersenwindows.com/windows-and-doors/windows/">Andersen Windows and Doors</a></li>
              <li><a href="https://www.marvin.com/products/windows">Marvin Windows and Doors</a></li>
              <li><a href="https://www.kolbewindows.com/windows">Kolbe Windows and Doors</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <img src="your-image-path" alt="Project images" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;