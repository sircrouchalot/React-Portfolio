import React from "react";
import { Media, Row, Col } from "reactstrap";
import "./About.css";
function About() {
  return (
    <Row>
      <Col xs="11" sm="6" className="d-flex p-2 justify-content-center about">
        <Media >
          <Media left>
            <Media
              object
              src="../../../Images/headshot.jpg"
              alt="Profile Image"
              width="275"
              height="275"
              style={{ borderRadius: "50%", border: "3px solid white" }}
            />
          </Media>
          <Media body className="mediaBody">
            <Media heading>About Me</Media>
            Full stack web developer and Photographer offering a keen eye for
            design and composition by leveraging a photography and film
            background. With a certificate in full stack development from the
            University of Texas - Austin, I utilize acquired skills in HTML,
            CSS, and Javascript to create beautiful and responsive web pages.
            <br />
            My focus is always on mobile-first design, creating interfaces that
            are intuitive and easy to use that offer utility to the user in
            order to make their experience seamless. My background in
            photography and experience in creating useful apps gives me an
            understanding of the marriage between design and utility that would
            be a strong addition to any workforce.
          </Media>
        </Media>
      </Col>
    </Row>
    // <Container>
    //   <Row>
    //     <div className="card-transparent col-12 col-xl-12" id="about">
    //       <div className="card-body">
    //         <h4 className="card-title about">About Me</h4>
    //         <Row>
    //           <Col size="lg-12 h-100 justify-content-center align-items-center">
    //             <img
    //               className="profile img-thumbnail"
    //               src="../../Images/headshot.jpg"
    //               alt="Profile"
    //               width="275"
    //               height="250"
    //               style={{borderRadius: "50%"}}
    //             />
    //             <p>
    //               Full stack web developer and Photographer offering a keen eye
    //               for design and composition by leveraging a photography and
    //               film background. With a certificate in full stack development
    //               from the University of Texas - Austin, I utilize acquired
    //               skills in HTML, CSS, and Javascript to create beautiful and
    //               responsive web pages.
    //               <br />
    //               My focus is always on mobile-first design, creating interfaces
    //               that are intuitive and easy to use that offer utility to the
    //               user in order to make their experience seamless. My background
    //               in photography and experience in creating useful apps gives me
    //               an understanding of the marriage between design and utility
    //               that would be a strong addition to any workforce.
    //             </p>
    //           </Col>
    //           </Row>
    //       </div>

    //     </div>
    //   </Row>
    // </Container>
  );
}

export default About;
