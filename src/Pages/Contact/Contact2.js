import React, { useState } from "react";
import Navbar from "../../Layouts/CommonLayouts/Navbar4";
import California from "../../assets/images/contact/contact-california-1000-632.jpg";
import Footer from "../../Layouts/CommonLayouts/Footer1";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";

const Contact2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  //meta title
  document.title = "TailWind TechWorks | Contact Us";
  return (
    <React.Fragment>
      <Navbar navClass="navbar-dark navbar-fixed" styleClass="2" />
      <div className="content-wrap" id="content-wrap">
        <div className="py-160 bg-dark">
          <Container>
            <Row className="justify-content-center text-white">
              <Col lg={10}>
                <h1
                  className="display-4 text-white mt-5 mb-130"
                  data-aos="fade-up"
                >
                  Get in touch.
                </h1>
                <Form action="#">
                  <p className="lead fw-medium mb-30">
                    Choose the types of project:
                  </p>
                  <Row className="gh-xs gv-xs mb-n7">
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxWebDesign"
                      />
                      <Label data-aos="fade-up" htmlFor="checkboxWebDesign">
                        <span>Data Analysis</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxAppDesign"
                        defaultChecked
                      />
                      <Label data-aos="fade-up" htmlFor="checkboxAppDesign">
                        <span>Systems design</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxLogoDesign"
                        defaultChecked
                      />
                      <Label data-aos="fade-up" htmlFor="checkboxLogoDesign">
                        <span>Machine Leaning</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxIllustration"
                      />
                      <Label data-aos="fade-up" htmlFor="checkboxIllustration">
                        <span>Custom Chatbots</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxPhotography"
                      />
                      <Label data-aos="fade-up" htmlFor="checkboxPhotography">
                        <span>AI Assistants</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxWebDevelopment"
                      />
                      <Label
                        data-aos="fade-up"
                        htmlFor="checkboxWebDevelopment"
                      >
                        <span>Dashboard design</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxAppDevelopment"
                      />
                      <Label
                        data-aos="fade-up"
                        htmlFor="checkboxAppDevelopment"
                      >
                        <span>App Development</span>
                      </Label>
                    </Col>
                    <Col className="col-auto">
                      <Input
                        className="checkbox-btn"
                        type="checkbox"
                        id="checkboxBranding"
                        defaultChecked
                      />
                      <Label data-aos="fade-up" htmlFor="checkboxBranding">
                        <span>Data Governance</span>
                      </Label>
                    </Col>
                  </Row>
                  <Row className="gh-1 gv-3 mt-30">
                    <Col data-aos="fade-up" className="col-12">
                      <Input
                        className="form-control form-control-lg form-control-white"
                        type="name"
                        placeholder="Your Name *"
                      />
                    </Col>
                    <Col md={6} data-aos="fade-up" className="col-12">
                      <Input
                        type="email"
                        className="form-control form-control-lg form-control-white"
                        placeholder="Your Email *"
                      />
                    </Col>
                    <Col md={6} data-aos="fade-up" className="col-12">
                      <Input
                        type="phone"
                        className="form-control form-control-lg form-control-white"
                        placeholder="Your Phone"
                      />
                    </Col>
                    <Col data-aos="fade-up" className="col-12">
                      <Input
                        type="company"
                        className="form-control form-control-lg form-control-white"
                        placeholder="Company"
                      />
                    </Col>
                    <Col data-aos="fade-up" className="col-12">
                      <Input
                        type="text"
                        className="form-control form-control-lg form-control-white"
                        placeholder="Title"
                      />
                    </Col>
                    <Col data-aos="fade-up" className="col-12">
                      <textarea
                        className="form-control form-control-lg form-control-white"
                        rows="1"
                        placeholder="Message *"
                      ></textarea>
                    </Col>
                  </Row>
                  <Button
                    className="btn btn-white btn-with-ball mt-90"
                    type="button"
                    name="button"
                  >
                    submit
                    <span className="btn-ball" style={{ transform: "translateY(0px)" }}></span>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="py-160">
          <Container>
            <Row className="gh-1 gv-2 align-items-center justify-content-center">
              <Col lg={1} className="d-none d-lg-block"></Col>
              <Col lg={5}
                className="ps-lg-0 ms-lg-n60 mt-60 mt-lg-0"
                data-aos="fade-right"
              >
                <img className="w-100" src={California} alt="" />
              </Col>
              <Col lg={1} className="d-none d-lg-block"></Col>
              <Col lg={3}
                className="ms-lg-n30 ps-lg-0 mb-n7 mb-lg-0"
                data-aos="fade-left"
              >
                <h4 className="mb-30">Los Angeles, California</h4>
                <ul className="list-group borderless pt-10">
                  <li className="list-group-item d-flex mt-15">
                    <svg
                      className="me-15 align-self-center"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 2.5C17 1.675 16.28 1 15.4 1H2.6C1.72 1 1 1.675 1 2.5M17 2.5V11.5C17 12.325 16.28 13 15.4 13H2.6C1.72 13 1 12.325 1 11.5V2.5M17 2.5L9 7.75L1 2.5"
                        stroke="#0E0E0E"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a href="mailto:hello@themebau.com?subject=Test%20Address%20Email">
                      hello@tailwind-techworks.com
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact2;
