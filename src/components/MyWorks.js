import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

function MyWorks() {
  return (
    <div>
 <Container>
      <Row style={{padding:"20px 0"}}>
        <Col>
        <Card>
            <Card.Img variant="top"  src={require('../images/tawfeeq-img.png')} height="300px" />
            <Card.Body>
            <Card.Title style={{fontWeight:"600", paddingBottom:"5px"}}>Wordpress - Website</Card.Title>
              <Card.Text style={{fontSize:".9rem"}}>
             <p> Tawfeeq Travel Group is a stellar name among the travel service providers in Qatar. 
              <Link to="https://www.tawfeeqtravel.com/" target="_blank"> https://www.tawfeeqtravel.com/</Link></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col> <Card>
            <Card.Img variant="top"  src={require('../images/alta-img.png')} height="300px" />
            <Card.Body>
              <Card.Title style={{fontWeight:"600", paddingBottom:"5px"}}>HTML/CSS - Website</Card.Title>
              <Card.Text style={{fontSize:".9rem"}}>
              <p>Digital Marketing, Cybersecurity, and Hospital Management Systems (HMS).
              <Link to="https://www.altatronics.ai/" target="_blank"> https://www.altatronics.ai/</Link> </p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          

      </Row>

      <Row style={{padding:"8px 0"}}>
      <Col> <Card>
            <Card.Img variant="top"  src={require('../images/hayaat-img.png')} height="300px" />
            <Card.Body>
              <Card.Title style={{fontWeight:"600", paddingBottom:"5px"}}>HTML/CSS - Website</Card.Title>
              <Card.Text style={{fontSize:".9rem"}}>
            <p> Hayaat Hospital, Established with the vision of creating a healthier and happier community.
              <Link to="https://www.hayaathospitals.com/" target="_blank"> https://www.hayaathospitals.com/</Link></p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col> <Card>
            <Card.Img variant="top"  src={require('../images/wedzee-img.png')} height="300px" />
            <Card.Body>
              <Card.Title style={{fontWeight:"600", paddingBottom:"5px"}}>HTML/CSS - Website</Card.Title>
              <Card.Text style={{fontSize:".9rem"}}>
             <p> Encompassing photography, videography, filmmaking , art and social media.
              <Link to="https://www.weddzee.com/" target="_blank"> https://www.weddzee.com/</Link></p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>


      </Row>

      <Row style={{padding:"20px 0"}}>
      <Col xs={2} md={6}> <Card>
            <Card.Img variant="top"  src={require('../images/portfolio-img.png')} height="300px" />
            <Card.Body>
              <Card.Title style={{fontWeight:"600", paddingBottom:"5px"}}>React JS - Website</Card.Title>
              {/* <Card.Text style={{fontSize:".9rem"}}>
             <p> Encompassing photography, videography, filmmaking , art and social media.
              <Link to="https://www.weddzee.com/" target="_blank"> https://www.weddzee.com/</Link></p>
              </Card.Text> */}
            </Card.Body>
          </Card>
          </Col>
      </Row>
 
    </Container>
    </div>
  )
}

export default MyWorks