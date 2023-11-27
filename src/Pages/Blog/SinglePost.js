import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
//Images
import Blog1 from "../../assets/images/blog/blog-1.jpg";
import Blog2 from "../../assets/images/blog/blog-2.jpg";
import Blog3 from "../../assets/images/blog/blog-3.jpg";
import BlogPost1 from "../../assets/images/blog/netflix.jpeg";
import BlogPost2 from "../../assets/images/blog/network_actors.png";
import BlogPost3 from "../../assets/images/blog/blog-post-3.jpg";
import BlogPost4 from "../../assets/images/blog/degree_centrality.png";
import BlogPost5 from "../../assets/images/blog/blog-post-5.jpg";
import BlogPost6 from "../../assets/images/blog/blog-post-6.jpg";
import Footer from "../../Layouts/CommonLayouts/Footer2";
import Navbar from "../../Layouts/CommonLayouts/Navbar3";

const SinglePost = () => {
  //meta title
  document.title = "TailWind TechWorks | Netflix Network";
  return (
    <React.Fragment>
      <Navbar navClass="sticky" />
      <div className="content-wrap" id="content-wrap">
        <Container>
          <Row className="justify-content-center text-center pt-60 pb-130 mt-30">
            <Col lg={8} className="col-12">
              <div className="subtitle" data-aos="fade-up">
                entertainment
              </div>
              <h1 className="h2 mb-n10" data-aos="fade-up">
                Who are the key players for Netflix?
              </h1>
            </Col>
          </Row>
          <img
            className="w-100 mb-100"
            src={BlogPost1}
            alt=""
            data-show-duration="800"
          />
          <Row className="justify-content-center gh-1 mb-100">
            <Col lg={8} className="post-content">
              <p className="lead fw-medium">
                In 2007, a decade after going into the film and television distribution 
                business as a DVD rental by mail company, Netflix made a bold move that 
                would change the way people watch television for the times to come. They 
                launched the first commercially successful subscription video-on-demand service, 
                forever changing the entertainment distribution and consumption paradigm. 
                For the first time, the audience could now watch what they wanted, when they 
                wanted, so long as the content they were looking for was available on the service. 
              </p>
              <p>
                Today Netflix has over 214 million subscribers worldwide, including 74 million 
                in the United States. As a data-driven company, they are known to perform extensive 
                analysis on the viewership data they collect from their users. These analyses 
                inform much of the decision-making processes within the company, including what 
                content to license, commission, or produce. Questions such as what content to 
                greenlight, who is a better actor for a given role, and who would be a good director 
                for a given film are all answered with data within the organization. However, as of 
                today, this information is mainly kept close to their chest. Identifying the key 
                players in the film industry, especially those contributing to Netflix's success, 
                can provide valuable insights into the elements driving the platform's popularity 
                and growth. By understanding the roles and impact of these individuals, Netflix can 
                better strategize content acquisition, creation, and marketing to maintain its 
                competitive edge and satisfy its diverse subscriber base.
              </p>
              <p>
                In the following analysis, I aim to answer the overarching question of who the key 
                individuals for Netflix’s success are by performing network analyses. This project 
                will focus on the titles currently available for viewing in the United States; however, 
                these same concepts could be extended to other countries. Unfortunately, Netflix doesn’t 
                make their viewership information available, but beginning about a year and a half ago, 
                they started posting their daily top 10 ranking in film and television. We will use this 
                data as a proxy measure of success by awarding each title 10 points for each day it ranks 
                number one, 9 points for each day it ranks number two, and so on. The final score is the 
                sum of points during the entire period for which a given title ranked in the top 10. Any 
                title released since they began posting rankings publicly but that did not rank in the top 
                10 is awarded the default value of 1 point. This data is then enriched by cross-referencing 
                the titles with existing movie databases, such as IMDb, to obtain the key talent involved. 
                With this data at hand, we build a weighted undirected graph where the nodes represent the 
                talent, the edges represent the movies they worked together in, and the edge weights are the 
                total ranking score for a given title. Network analysis was chosen to answer the research 
                question due to its ability to uncover complex relationships and interactions among individuals 
                involved in the film industry. By examining the connections between key personnel in various 
                projects, we can gain insights into the structure and dynamics of the industry and identify 
                the most influential players based on their positions within the network. 
              </p>
            </Col>
          </Row>
          <Row className="gh-1 gv-1 mb-100 justify-content-center">
            <Col sm={8} className="col-12" data-aos="fade-up">
              <Link
                to={BlogPost2}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-1"
                data-aos="fade"
              >
                <img src={BlogPost2} alt="" />
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center gh-1 mb-10">
            <Col lg={8} className="post-content">
              <h3>How you meaure importance matters.</h3>
              <p>
                Any network with connections between individuals, where the 
                connections capture the relationship between them is a social 
                network. Analyzing these networks can give us great insight 
                about the people in the network like who are real influencers,
                who are most connected, etc. To the end goal of finding the most 
                important nodes (individuals) in the network, we will focus on two metrics knows as...
              </p>
              <h4>Centrality Measures</h4>
            </Col>
          </Row>
          <Row className="gh-1 gv-1 mb-100">
            <Col sm={6} md={4} className="col-12" data-aos="fade-up">
              <h3>Degree Centrality</h3>
              <Link
                to={BlogPost4}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-2"
                data-aos="fade"
              >
                <img src={BlogPost4} alt="Degree Centrality"/>
              </Link>
            </Col>
            <Col sm={6} md={4} className="col-12" data-aos="fade-up">
              <Link
                to={BlogPost5}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-2"
                data-aos="fade"
              >
                <img src={BlogPost5} alt="" />
              </Link>
            </Col>
            <Col sm={6} md={4} className="col-12" data-aos="fade-up">
              <Link
                to={BlogPost6}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-2"
                data-aos="fade"
              >
                <img src={BlogPost6} alt="" />
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center gh-1 mb-100">
            <Col lg={8} className="post-content">
                <p>
                  One of the most surprising results from these analyses is that, 
                  although most of the people involved in the network are actors, 
                  most of the players central to Netflix are not. Degree centrality, 
                  which is based on the fact that important people have many connections, 
                  predictably shows that producers primarily dominate the top rank. This 
                  understanding coincides with a producer's role in producing film and 
                  television content, where they are tasked with making the connections 
                  necessary for a project to be realized. On the other hand, eigenvector 
                  centrality, which aims to rate players by the importance of their neighbors, 
                  shows a higher percentage of actors. Finally, PageRank centrality, which 
                  rates players by the centrality of their connections, offers the most 
                  diverse group of individuals.
                </p>
              </Col>
            </Row>
          <Row className="justify-content-center gh-1 mb-n4">
            <Col lg={6} className="col-12 text-center">
              <svg
                className="mb-30"
                width="38"
                height="24"
                viewBox="0 0 38 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24L10.1466 0H18.801L13.4293 24H0ZM19.199 24L29.3455 0H38L32.5288 24H19.199Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-6 mb-100">
                Whales fly cattle all, us saw given moveth rule very thing from
                him. Fruitful female unto every dominion two all.
              </blockquote>
            </Col>
            <Col lg={8} className="col-12">
              <hr className="mt-n10 mb-30" />
              <Row className="gh-2 gv-1 justify-content-between">
                <Col className="col-auto">
                  <span className="fw-medium me-8">Tags:</span>{" "}
                  <Link to="/#">company</Link>,{" "}
                  <Link to="/#">design</Link>,{" "}
                  <Link to="/#">travel</Link>
                </Col>
                <Col className="col-auto">
                  <span className="fw-medium">Share:</span>
                  <ul className="nav nav-gap-sm d-inline-flex ms-10">
                    <li className="nav-item">
                      <Link to="/#" className="nav-link">
                        <svg
                          width="6"
                          height="15"
                          viewBox="0 0 10 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/#" className="nav-link">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 25 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/#" className="nav-link">
                        <svg
                          width="11"
                          height="14"
                          viewBox="0 0 11 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.84375 0C2.90469 0 0 1.91862 0 5.02377C0 6.99849 1.13437 8.12049 1.82187 8.12049C2.10547 8.12049 2.26875 7.34631 2.26875 7.12752C2.26875 6.86665 1.58984 6.31126 1.58984 5.22573C1.58984 2.9705 3.34297 1.37165 5.61172 1.37165C7.5625 1.37165 9.00625 2.45718 9.00625 4.45154C9.00625 5.941 8.39609 8.73479 6.41953 8.73479C5.70625 8.73479 5.09609 8.22989 5.09609 7.5062C5.09609 6.4459 5.85234 5.41927 5.85234 4.32532C5.85234 2.46841 3.1625 2.80501 3.1625 5.04901C3.1625 5.52025 3.22266 6.04198 3.4375 6.47115C3.04219 8.13732 2.23438 10.6198 2.23438 12.3364C2.23438 12.8666 2.31172 13.3883 2.36328 13.9184C2.46068 14.025 2.41198 14.0138 2.56094 13.9605C4.00469 12.0251 3.95313 11.6464 4.60625 9.11346C4.95859 9.76983 5.86953 10.1233 6.59141 10.1233C9.63359 10.1233 11 7.22008 11 4.60301C11 1.81764 8.54219 0 5.84375 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <h2 className="text-center mt-130 pb-30 mb-60">Related posts</h2>
          <Row className="gh-1 gv-1 mb-n8">
            <Col md={6} lg={4} className="col-12" data-aos="fade-up">
              <Link
                className="card card-blog card-vertical"
                to="/singlepost"
              >
                <span className="card-img">
                  <img src={Blog1} alt="" />
                </span>
                <span className="card-body">
                  <span className="card-title h5">
                    Office explained in fewer than 100+ Characters
                  </span>
                  <span className="card-date">12 may, 2020</span>
                </span>
              </Link>
            </Col>
            <Col md={6} lg={4} className="col-12" data-aos="fade-up">
              <Link
                className="card card-blog card-vertical"
                to="/singlepost"
              >
                <span className="card-img">
                  <img src={Blog2} alt="" />
                </span>
                <span className="card-body">
                  <span className="card-title h5">
                    This week&/#39;s top Stories about Development
                  </span>
                  <span className="card-date">08 may, 2020</span>
                </span>
              </Link>
            </Col>
            <Col md={6} lg={4} className="col-12" data-aos="fade-up">
              <Link
                className="card card-blog card-vertical"
                to="/singlepost"
              >
                <span className="card-img">
                  <img src={Blog3} alt="" />
                </span>
                <span className="card-body">
                  <span className="card-title h5">
                    Facts about Business that you never knew
                  </span>
                  <span className="card-date">05 may, 2020</span>
                </span>
              </Link>
            </Col>
          </Row>
          <div className="page-navigation mt-160">
            <Link to="/#" className="btn btn-clean">
              <svg
                className="icon-arrow icon-arrow-left"
                width="26"
                height="11"
                viewBox="0 0 26 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 1L1 5.5L5.5 10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5.5H1"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              prev<span className="d-none d-sm-inline"> post</span>
            </Link>
            <Link
              to="/blog-col-1"
              className="btn btn-light btn-circle btn-xs"
            >
              all
            </Link>
            <Link to="/#" className="btn btn-clean">
              next<span className="d-none d-sm-inline"> post</span>
              <svg
                className="icon-arrow icon-arrow-right"
                width="26"
                height="11"
                viewBox="0 0 26 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 1L25 5.5L20.5 10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 5.5H25"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SinglePost;
