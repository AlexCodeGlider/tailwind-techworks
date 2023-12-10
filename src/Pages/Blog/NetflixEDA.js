import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
//Images
import Blog1 from "../../assets/images/blog/blog-1.jpg";
import Blog2 from "../../assets/images/blog/blog-2.jpg";
import Blog3 from "../../assets/images/blog/blog-3.jpg";
import BlogPost1 from "../../assets/images/blog/top10-films-mexico-oct-23-oct-29-2023.jpeg";
import BlogPost2 from "../../assets/images/blog/log_normal_US_scores_fit.png";
import BlogPost3 from "../../assets/images/blog/log_normal_MX_scores_fit.png";
import Footer from "../../Layouts/CommonLayouts/Footer2";
import Navbar from "../../Layouts/CommonLayouts/Navbar3";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../../assets/data/predictions.json';
import feature_importances from '../../assets/data/feature_importances.json';

function CustomTooltip({ payload }) {
  if (payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', maxWidth: '700px' }}>
        <p style={{ margin: '0.5em 0' }}><strong>Title:</strong> {data.Title}</p>
        <p style={{ margin: '0.5em 0' }}><strong>Score:</strong> {data.Score}</p>
        <p style={{ margin: '0.5em 0' }}><strong>Genre:</strong> {data.Genre}</p>
        <p style={{ margin: '0.5em 0' }}><strong>Director:</strong> {data.Director}</p>
        <p style={{ margin: '0.5em 0' }}><strong>Actors:</strong> {data.Actor}</p>
        <p style={{ margin: '0.5em 0' }}><strong>Plot:</strong> {data.Plot}</p>
      </div>
    );
  }

  return null;
}

function MovieChart() {
  return (
    <ResponsiveContainer width="100%" height={1000}>
      <BarChart layout="vertical" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis 
          dataKey="Title" 
          type="category" 
          width={280} 
          interval={0}
          tick={props => (
            <text 
              x={props.x} 
              y={props.y} 
              dy={3}
              textAnchor="end" 
              fill={props.fill}
              fontSize={16}
            >
              {props.payload.value}
            </text>
          )}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="Score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function FeatureImportanceChart() {
  return (
    <ResponsiveContainer width="100%" height={1000}>
      <BarChart layout="vertical" data={feature_importances}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis 
          dataKey="feature"
          type="category"
          width={280}
          interval={0}
          tick={props => (
            <text 
              x={props.x} 
              y={props.y} 
              dy={3}
              textAnchor="end" 
              fill={props.fill}
              fontSize={16}
            >
              {props.payload.value}
            </text>
          )}
        />
        <Tooltip />
        <Bar dataKey="importance" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

const NetflixEDA = () => {
  //meta title
  document.title = "Tailwind TechWorks | Predicting Netflix Success";
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
                Developing a Netflix Score and Predicting Success
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
               Our goal was to create a decision support system 
               to aid movie investments at the early stage of a movie's production.
              </p>
              <p>
                Netflix has become a major player in the
                entertainment industry. The company has been producing its own
                content since 2013, and has been releasing more and more titles
                every year. In 2019, Netflix released 371 titles, which is more
                than one per day. The company has been very secretive about the
                performance of its titles, and has not released any information
                about viewership. However, Netflix has been publishing daily
                rankings of its titles since 2018. These rankings are based on
                the number of accounts that have watched at least two minutes of
                a given title during a given day. The rankings are updated
                daily, and are available for each country where Netflix is
                available. The rankings are available on the Netflix website,
                and are also published by several media outlets, including
                Business Insider, Forbes, and The New York Times.
              </p>
              <p className="lead fw-medium">
                Over the past few years, our system was proven to be extremely
                valuable in aiding our film investment decisions with many of our
                client's films ranking in the top 10 consistently. 
              </p>
              <p> 
               The system uses Netflix ranking as a proxy measure of success by awarding 
               each title 10 points for each day it ranks number one, 9 points for each 
               day it ranks number two, 
               and so on. The final score is the sum of points during the entire period 
               for which a given title ranked in the top 10. Any title released since 
               they began posting rankings publicly but that did not rank in the top 
               10 is awarded the default value of 1 point. 
               Using social network analysis and advanced natural language processing 
               (NLP) techniques, the system automatically extracts several groups of features, 
               including the “who” (cast and crew), the “what” (the plot), as well 
               as “hybrid” features that match “who” with “what”. In order to support 
               investment decisions on a movie, the model has to be provided information 
               that is available at the very early stage of the movie’s production. 
               Consequently, our prediction of movie success can only leverage data that 
               is available when a movie is still being planned. Predictions that are made 
               right before or after the official release may have more data to use and get
                more accurate results, but they are too late for investors to make any
                 meaningful decision.
              </p>
              <h3>Distribution of Score</h3>
            </Col>
          </Row>
          <Row className="gh-1 gv-1 mb-100">
            <Col sm={6} className="col-12" data-aos="fade-up">
              <Link
                to={BlogPost2}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-1"
                data-aos="fade"
              >
                <img src={BlogPost2} alt="" />
              </Link>
            </Col>
            <div className="col-12 col-sm-6" data-aos="fade-up">
              <Link
                to={BlogPost3}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-1"
                data-aos="fade"
              >
                <img src={BlogPost3} alt="" />
              </Link>
            </div>
          </Row>
          <Row className="justify-content-center gh-1 mb-100">
            <Col lg={8} className="post-content">
              <h4>Most movies achieve a small degree of success, a few achieve tremendous success</h4>
              <p>
              The best-fitting distribution for scores as an ordered statistic 
              according to the sum of 
              squared estimate of errors (SSE), is the log-normal distribution. 
              This makes intuitive sense, given that log-normal distributions are 
              often used to model the distribution of movie success metrics, which 
              typically have a right-skewed distribution. 
              </p>
              <p>
              The log-normal distribution is well-suited to describe distributions where 
              the majority of observations are clustered around a lower value, with relatively 
              few large values — a common pattern in real-world phenomena where growth and 
              multiplicative processes are present.
              </p>
              <h4>Feature Engineering</h4>
              <ul>
                <li><strong>Talent Metrics:</strong> Including total and average scores by actors, directors, and producers for each film.</li>
                <li><strong>Tenure:</strong> The experience of talents in the industry calculated as the time difference (in days) between the movie in which a talent most recently appeared and that in which he/she first ever appeared. 
                For each movie, we calculated the average tenure for its actors, directors, and producers.</li>
                <li><strong>Network Analysis:</strong> We used NetworkX to analyze social networks of talents based on their collaborations in films.</li>
              </ul>
              <p>
              The general purpose is to extract and aggregate metrics from observations that include 
              a list of participating members, such as a list of actors, directors and producers from 
              a film. The metrics extracted include metrics by member which are then aggregated for all 
              members in an observation (Ex. total and average score by actor for all actors in a film), 
              and network analysis (such as degree centrality measures).
              </p>
              <h4>Plot Scoring</h4>
              <p>
              Another natural and important indicator of a movie’s performance is what the movie is about. 
              Such information is usually available with high certainty in the development stage. To reflect 
              what a movie is about, the content features in our model include both meta features, such as 
              genre (e.g., action, sci-fi, family) and rating (e.g., PG13, and R), but also fine-grained 
              description of a movie’s content – its plot synopsis. 
              </p>
              <p>To get a better picture of what a plot is about we leverage the powerful <strong>TextRank4Keyword</strong>  (
                <text style={{ fontFamily: 'monospace' }}>t4k</text>) 
              library, which in turn is based on the <strong>PageRank</strong> library developed by Google. The input 
              for <text style={{ fontFamily: 'monospace' }}>t4k</text> is a textual corpus 
                from plot synopses and the output is a group of topics, each being represented by a probabilistic 
                distribution over words. Those words with high probabilities on a topic are considered representative 
                keywords for the plot. In turn each of this probabilities is the weighted against the movie's score. 
                As a result, the weight of the resulting keywords are representative of the popularity of topics.
              </p>
              <h3>Modeling Success with <text style={{ fontFamily: 'monospace' }}>LightGBM</text></h3>
              <p>
              We used a Light Gradient Boosting Machine (<text style={{ fontFamily: 'monospace' }}>LightGBM</text>) to predict movie scores based on its features. 
              The <text style={{ fontFamily: 'monospace' }}>LightGBM</text> is a machine learning technique that builds an ensemble of weak
                prediction models, typically decision trees, and combines them to produce
                  a strong prediction model. The <text style={{ fontFamily: 'monospace' }}>LightGBM</text> is a powerful technique that has been
                    used in many applications.
              </p>
              <p>
                For our loss function, we used the root mean squared error (RMSE) between the predicted score and the actual score. 
                The RMSE is a common loss function for regression problems. It is the square root of the average of the squared
                  differences between the predicted and actual values. The RMSE is a measure of the spread of the residuals,
                    or the difference between the predicted and actual values. The smaller the RMSE, the better the model.
              </p>
              <p>
                Our model was trained on a dataset of nearly 1,000 movies released between 2018 and 2022. Our cross-validation
                  results show that the model has an average RMSE of 1.25 points. This means that the model’s prediction is
                    off by 1.25 points on average, which is an excellent result given that the score ranges from 1 to 700.
              </p>
              <h3>Results</h3>
              <p>
                The model was used to predict the scores of 1,000 movies released between 2018 and 2022. The model’s predictions
                  were compared with the actual scores of these movies. The results show that the model’s predictions are highly
                    accurate. The model’s predictions are within 1 point of the actual score for 80% of the movies, and within 2
                      points for 95% of the movies. The model’s predictions are within 3 points for 99% of the movies.
              </p>
            </Col>
          </Row>
          <MovieChart />
          <Row className="justify-content-center gh-1 mb-100">
            <Col lg={8} className="post-content">
              <h3>Feature Importance</h3>
              <p>
                The model’s feature importance analysis shows that the most important features in hierarchical order are the movie’s
                  cast, the movie’s director, and the movie’s plot.
              </p>
            </Col>
          </Row>
          <FeatureImportanceChart />
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
                <p>
                <a href="https://github.com/AlexCodeGlider/filmStreamingForecast" target="_blank" rel="noopener noreferrer">
                <span className="d-inline-block ml-2">View the project on GitHub</span>
                <br />
                <br />
                  <svg
                    className="github-logo mr-2" // Add margin to the right of the logo
                    width="64"
                    height="64"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.91 11.84 2.63 11.65C2.37 11.48 1.82 11.07 2.49 11.06C3.15 11.04 3.57 11.77 3.73 12.03C4.44 13.07 5.55 12.73 6.05 12.5C6.12 12.09 6.33 11.8 6.56 11.61C4.76 11.42 2.91 10.73 2.91 7.77C2.91 6.88 3.23 6.16 3.74 5.59C3.67 5.39 3.42 4.2 3.82 3.15C3.82 3.15 4.49 2.93 6.02 4.06C6.67 3.91 7.34 3.83 8.02 3.83C8.69 3.83 9.36 3.91 10.01 4.06C11.54 2.93 12.21 3.15 12.21 3.15C12.61 4.2 12.36 5.39 12.29 5.59C12.8 6.16 13.13 6.88 13.13 7.77C13.13 10.74 11.27 11.42 9.47 11.61C9.76 11.86 10.01 12.39 10.01 13.08C10.01 14.01 10 14.92 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    />
                  </svg>
                </a>
              </p>
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

export default NetflixEDA;
