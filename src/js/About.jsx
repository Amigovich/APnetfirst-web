import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

function About() {

  const images = [
    { id: 1, src: './IMG_20231207_105942947_HDR.jpg'},
    { id: 2, src: './IMG_20231207_133443881_HDR.jpg'},
    { id: 3, src: './IMG_20231208_151631126.jpg'},
    { id: 4, src: './IMG_20231208_151618797.jpg'},
    { id: 5, src: './IMG_20240403_110802047.jpg'},
    { id: 6, src: './IMG_20240403_144233779.jpg'},
    { id: 7, src: './IMG_20240403_164521667.jpg'},
    { id: 8, src: './IMG_20240403_165137768.jpg'},
    { id: 9, src: './IMG_20240312_203206572.jpg'},
    { id: 10, src: './IMG_20240320_143232538.jpg'},
    { id: 11, src: './IMG_20240404_114335101.jpg'},
    { id: 12, src: './IMG_20240404_180136697.jpg'},
    { id: 13, src: './IMG_20240405_102835075.jpg'},
    { id: 14, src: './IMG_20231206_143205000_HDR.jpg'},
    { id: 15, src: './IMG_20231205_213909652.jpg'},
    { id: 16, src: './IMG_20231017_171044785.jpg'},
    { id: 17, src: './IMG_20231017_171113847_HDR.jpg'},
    { id: 18, src: './IMG_20231020_141828432_HDR.jpg'},
    { id: 19, src: './IMG_20231030_163804288.jpg'},
    { id: 20, src: './IMG_20240405_134954491.jpg'},
  ];

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }


  return (
    <section id="about" className="about-content">
      <Container className='mt-5'>
        <h1 className="text-center">About Us</h1>
        <Row>
        <Col xs={12} md={2} className="d-flex justify-content-end">
            <div className="partners-container">
              <h3>Our Partners</h3>
              <ul>
                <li><a href="https://www.andersenwindows.com/windows-and-doors/windows/">Andersen Windows and Doors</a></li>
                <li><a href="https://www.marvin.com/products/windows">Marvin Windows and Doors</a></li>
                <li><a href="https://www.kolbewindows.com/windows">Kolbe Windows and Doors</a></li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={8} className="about-container">
            <p className="p1">
              Welcome to AP Home Services, your trusted partner in construction and home improvement. With a commitment to excellence and a focus on customer satisfaction, we bring your vision to life. Our dedicated team of professionals is here to make your dream home a reality.
            </p>
            <p className="p2">
              We are located in the Twin Cities area, serving the metro with dedication.
            </p>
          </Col>
          <Row className="mt-5">
          <Col xs={12} md={12}>
          <Carousel>
            {groupedImages.map((imageGroup, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {imageGroup.map((image) => (
                    <Col xs={12} md={3} key={image.id} className="mb-3">
                      <Card>
                        <Card.Img variant="top" src={image.src} style={{ width: '100%', height: '200px' }} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
          </Col>
      </Row>
        </Row>
      </Container>
    </section>
  );
}

export default About;