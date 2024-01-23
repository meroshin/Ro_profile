import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/Navbar.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Home() {


  return (
    <div>
      <Container fluid className="w-100 text-center banner">
        <div className="row">
          <Row className="row">
            <Col className="head-text">
              <h1>I'm ROSHIN RAMESH </h1>
              <h4>Front End Developer</h4>
            </Col>
            <Col>
              <img src="banner-img.jpg" width="80%" alt="banner"></img>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="mt-5 p-5">
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3 filter-tab"
          justify
        >
          <Tab eventKey="longer-tab" title="Education" className="mt-5 pt-3">
            <h5> <b>2015-2019</b> 
            <br/>
             B.Sc.Computer Science, 
      
            Kannur University</h5>

            <br />
            <hr className="mt-0 w-50"/>

            <h5><b>2014-2015</b>
            <br/>
             PlusTwo, 
        
             Munderi Govt.School, Kannur</h5>

            <br />
            <hr className="mt-0 w-50"/>

            <h5><b>2013</b>
            <br/> 
            SSLC, 
          CHM School, Kannur</h5>
          </Tab>
          <Tab eventKey="home" title="Profile" className="mt-5 pt-3">
            <p>
              Dedicated and detail-oriented front-enddeveloper with <b>3 years</b> of
              experience increating and implementing innovative web designs and
              user experiences.Proficient in HTML, CSS, Bootstrap, Wordpress,
              React JS, JavaScript and responsive design principles.Adept at
              collaborating with cross-functional teams to drive project
              success.
            </p>
          </Tab>
          <Tab eventKey="profile" title="Skills" className="mt-5 pt-3">
          <div >
      <ProgressBar  variant="success" animated now={91} label="HTML" />
      <ProgressBar  animated now={80} label="BOOTSTRAP" />
      <ProgressBar variant="danger"  animated now={88} label="CSS" />
      <ProgressBar variant="warning" now={80}   animated label="WORDPRESS" />
      <ProgressBar variant="danger"  animated now={65} label="REACT JS" />
      <ProgressBar variant="info"  animated now={93} label="PHOTOSHOP" />
    </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Home;
