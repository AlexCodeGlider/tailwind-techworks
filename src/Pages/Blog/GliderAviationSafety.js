import React from 'react';
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
//Images
import Blog1 from "../../assets/images/blog/blog-1.jpg";
import Blog2 from "../../assets/images/blog/blog-2.jpg";
import Blog3 from "../../assets/images/blog/blog-3.jpg";
import Glider1 from "../../assets/images/blog/glider-1.jpg";
import BlogPost4 from "../../assets/images/blog/photorealistic_glider.png";
import BlogPost5 from "../../assets/images/blog/glider_soaring.png";
import BlogPost6 from "../../assets/images/blog/dessert_glider.png";
import Footer from "../../Layouts/CommonLayouts/Footer2";
import Navbar from "../../Layouts/CommonLayouts/Navbar3";
import AccidentMap from '../../components/AccidentMap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import NTSBData from '../../assets/data/accident_causes.json';
import AccidentPhases from '../../assets/data/accident_phases.json';
import AccidentEvents from '../../assets/data/accident_events.json';
import AccidentCausesWordCount from '../../assets/data/accident_causes_word_count.json';
import AccidentsByYear from '../../assets/data/accident_year_injury_counts.json';
import AccidentTopics from '../../assets/data/accident_topics.json';

function NTSBFindingsChart() {
  return (
    <ResponsiveContainer width="100%" height={1000}>
      <BarChart layout="vertical" data={NTSBData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis 
          dataKey="ReportText" 
          type="category" 
          width={500} 
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
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// console.log(AccidentPhases);

//Group the AccidentPhases data which has the following structure:
// [
//   {"injury_level":"Serious","event_cicttPhaseSOEGroup":"Landing","count":34},
  // {"injury_level":"Serious","event_cicttPhaseSOEGroup":"Take Off","count":14},
  // {"injury_level":"Serious","event_cicttPhaseSOEGroup":"In-Flight","count":7},{"injury_level":"Serious","event_cicttPhaseSOEGroup":"System\/Component Failure (Non-Powerplant)","count":5},{"injury_level":"Serious","event_cicttEventSOEGroup":"Midair","count":4},{"injury_level":"Serious","event_cicttEventSOEGroup":"Loss of Control (Ground)","count":3},{"injury_level":"Serious","event_cicttEventSOEGroup":"CFIT","count":2},{"injury_level":"Serious","event_cicttEventSOEGroup":"Runway Excursion","count":2},{"injury_level":"Serious","event_cicttEventSOEGroup":"Abrupt Maneuver","count":1},{"injury_level":"Serious","event_cicttEventSOEGroup":"Low Altitude","count":1},{"injury_level":"Serious","event_cicttEventSOEGroup":"Turbulence","count":1},{"injury_level":"Serious","event_cicttEventSOEGroup":"Undershoot\/Overshoot","count":1},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Loss of Control (Inflight)","count":57},{"injury_level":"Fatal","event_cicttEventSOEGroup":"System\/Component Failure (Non-Powerplant)","count":9},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Midair","count":8},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Abrupt Maneuver","count":5},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Low Altitude","count":3},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Weather","count":3},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Turbulence","count":2},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Abnormal Runway Contact","count":1},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Cabin Safety","count":1},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Ground Collision","count":1}, 
// by event_cicttPhaseSOEGroup such that the resulting groupedData array has the following structure:
// [
//   {
//     event_cicttPhaseSOEGroup: 'Landing',
//     Fatal: 24,
//     Serious: 20,
//     Minor: 10,
//   },
//  { ... },

// ]

const groupedData2 = AccidentPhases.reduce((acc, curr) => {
  const { event_cicttPhaseSOEGroup, injury_level, count } = curr;
  const existingGroup = acc.find((item) => item.event_cicttPhaseSOEGroup === event_cicttPhaseSOEGroup);
  if (existingGroup) {
    existingGroup[injury_level] = count;
  } else {
    acc.push({
      event_cicttPhaseSOEGroup,
      [injury_level]: count,
    });
  }
  return acc;
}, []);

function PhasesChart() {
  return (
    <ResponsiveContainer width="100%" height={700}>
      <BarChart
        width={500}
        height={300}
        data={groupedData2}
        margin={{
          top: 20,
          right: 30,
          left: 100,
          bottom: 300,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="number" />
        <XAxis
          dataKey="event_cicttPhaseSOEGroup"
          type="category"
          width={500}
          interval={0}
          tick={props => (
            <text
              x={props.x}
              y={props.y}
              dy={16} // Increase the dy value to adjust the distance between the tick and the axis
              textAnchor="end"
              fill={props.fill}
              fontSize={14}
              fontWeight="bold" // Make the font bold
              transform={`rotate(-45, ${props.x}, ${props.y})`} // Rotate the tick by 45 degrees
            >
              {props.payload.value}
            </text>
          )}
        />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Bar dataKey="Fatal" fill="#FF0000" barSize={30} />
        <Bar dataKey="Serious" fill="#8884d8"barSize={30} />
        <Bar dataKey="Minor" fill="#82ca9d" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

//Group the data which has the following structure:
// [
//   {"injury_level":"Serious","event_cicttEventSOEGroup":"Loss of Control (Inflight)","count":34},
  // {"injury_level":"Serious","event_cicttEventSOEGroup":"Abnormal Runway Contact","count":14},
  // {"injury_level":"Serious","event_cicttEventSOEGroup":"Weather","count":7},{"injury_level":"Serious","event_cicttEventSOEGroup":"System\/Component Failure (Non-Powerplant)","count":5},{"injury_level":"Serious","event_cicttEventSOEGroup":"Midair","count":4},{"injury_level":"Serious","event_cicttEventSOEGroup":"Loss of Control (Ground)","count":3},{"injury_level":"Serious","event_cicttEventSOEGroup":"CFIT","count":2},{"injury_level":"Serious","event_cicttEventSOEGroup":"Runway Excursion","count":2},{"injury_level":"Serious","event_cicttEventSOEGroup":"Abrupt Maneuver","count":1},{"injury_level":"Serious","event_cicttEventSOEGroup":"Low Altitude","count":1},{"injury_level":"Serious","event_cicttEventSOEGroup":"Turbulence","count":1},{"injury_level":"Serious","event_cicttEventSOEGroup":"Undershoot\/Overshoot","count":1},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Loss of Control (Inflight)","count":57},{"injury_level":"Fatal","event_cicttEventSOEGroup":"System\/Component Failure (Non-Powerplant)","count":9},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Midair","count":8},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Abrupt Maneuver","count":5},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Low Altitude","count":3},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Weather","count":3},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Turbulence","count":2},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Abnormal Runway Contact","count":1},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Cabin Safety","count":1},{"injury_level":"Fatal","event_cicttEventSOEGroup":"Ground Collision","count":1}, 
// by event_cicttEventSOEGroup such that the resulting groupedData array has the following structure:
// [
//   {
//     event_cicttEventSOEGroup: 'Loss of Control (Inflight)',
//     Fatal: 24,
//     Serious: 20,
//   },
//  { ... },

// ]

const groupedData = AccidentEvents.reduce((acc, curr) => {
  const { event_cicttEventSOEGroup, injury_level, count } = curr;
  const existingGroup = acc.find((item) => item.event_cicttEventSOEGroup === event_cicttEventSOEGroup);
  if (existingGroup) {
    existingGroup[injury_level] = count;
  } else {
    acc.push({
      event_cicttEventSOEGroup,
      [injury_level]: count,
    });
  }
  return acc;
}, []);

//console.log(groupedData);

function EventsChart() {
  return (
    <ResponsiveContainer width="100%" height={700}>
      <BarChart
        width={500}
        height={300}
        data={groupedData}
        margin={{
          top: 20,
          right: 30,
          left: 100,
          bottom: 300,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="event_cicttEventSOEGroup"
          type="category"
          width={500}
          interval={0}
          tick={props => (
            <text
              x={props.x}
              y={props.y}
              dy={16} // Increase the dy value to adjust the distance between the tick and the axis
              textAnchor="end"
              fill={props.fill}
              fontSize={14}
              fontWeight="bold" // Make the font bold
              transform={`rotate(-45, ${props.x}, ${props.y})`} // Rotate the tick by 45 degrees
            >
              {props.payload.value}
            </text>
          )}
        />
        <YAxis orientation="left" stroke="#8884d8" />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Bar dataKey="Fatal" fill="#FF0000" barSize={30} />
        <Bar dataKey="Serious" fill="#8884d8" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Create a horizontal barchart of the top 20 words in the accident causes narratives
// The data has the following structure:
// [
//   {"word":"pilot","count":34},
//   {"word":"aircraft","count":14},  
//   {"word":"flight","count":7},

// ]

function AccidentCausesWordCountChart() {
  return (
    <ResponsiveContainer width="100%" height={1000}>
      <BarChart layout="vertical" data={AccidentCausesWordCount}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis 
          dataKey="word" 
          type="category" 
          width={500} 
          interval={0}
          tick={props => (
            <text 
              x={props.x} 
              y={props.y} 
              dy={3}
              textAnchor="end" 
              fill={props.fill}
              fontSize={20}
            >
              {props.payload.value}
            </text>
          )}
        />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function AccidentsByYearChart() {
  return (
    <ResponsiveContainer width="100%" height={700}>
      <LineChart
        width={500}
        height={300}
        data={AccidentsByYear}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 300,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          type="category"
          width={500}
          interval={0}
          tick={props => (
            <text
              x={props.x}
              y={props.y}
              dy={16} // Increase the dy value to adjust the distance between the tick and the axis
              textAnchor="end"
              fill={props.fill}
              fontSize={14}
              fontWeight="bold" // Make the font bold
              transform={`rotate(-45, ${props.x}, ${props.y})`} // Rotate the tick by 45 degrees
            >
              {props.payload.value}
            </text>
          )}
        />
        <YAxis orientation="left" stroke="#8884d8" />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Line type="monotone" dataKey="Fatal" stroke="#FF0000" />
        <Line type="monotone" dataKey="Serious" stroke="#8884d8" />
        <Line type="monotone" dataKey="Minor" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

function TopicsChart() {
  return (
    <ResponsiveContainer width="100%" height={700}>
      <BarChart
        width={500}
        height={300}
        data={AccidentTopics}
        margin={{
          top: 20,
          right: 30,
          left: 100,
          bottom: 300,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="topic"
          type="category"
          width={500}
          interval={0}
          tick={props => (
            <text
              x={props.x}
              y={props.y}
              dy={16} // Increase the dy value to adjust the distance between the tick and the axis
              textAnchor="end"
              fill={props.fill}
              fontSize={14}
              fontWeight="bold" // Make the font bold
              transform={`rotate(-45, ${props.x}, ${props.y})`} // Rotate the tick by 45 degrees
            >
              {props.payload.value}
            </text>
          )}
        />
        <YAxis orientation="left" stroke="#8884d8" />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Bar dataKey="Fatal" fill="#FF0000" barSize={30} />
        <Bar dataKey="Serious" fill="#8884d8"barSize={30} />
        <Bar dataKey="Minor" fill="#82ca9d" barSize={30} />

      </BarChart>
    </ResponsiveContainer>
  );
}

const GliderAviationSafety = () => {
  //meta title
  document.title = "TailWind TechWorks | Glider Aviation Safety";
  return (
    <React.Fragment>
      <Navbar navClass="sticky" />
      <div className="content-wrap" id="content-wrap">
        <Container>
          <Row className="justify-content-center text-center pt-60 pb-130 mt-30">
            <Col lg={8} className="col-12">
              <div className="subtitle" data-aos="fade-up">
                Aviation
              </div>
              <h1 className="h2 mb-n10" data-aos="fade-up">
                Exploring Glider Aviation Safety with data from the National Transportation Safety Board (NTSB)
              </h1>
            </Col>
          </Row>
          <img
            className="w-100 mb-100"
            src={Glider1}
            alt=""
            data-show-duration="800"
          />
          <Row className="justify-content-center gh-1 mb-100">
            <Col lg={8} className="post-content">
              <p className="lead fw-medium">
                In the world of general aviation, gliders offer an experience like no other. 
                However, like any form of flying, safety is paramount. 
                This blog post delves into a detailed analysis of glider aviation 
                safety data, examining accident rates 
                and exploring recommendations to 
                enhance safety in the glider pilot community.
              </p>
              <p>
                The data used in this analysis includes glider accident reports available 
                from the NTSB's CAROL Query tool, and information on the number of gliders 
                built for each make and model, collected independently. The accident reports 
                were analyzed using various data analysis and Natural Language Processing (NLP) 
                techniques. The analysis is based on data available from 1983 up to June 2023.
              </p>
              <p>
                  <a href="https://github.com/AlexCodeGlider/gliderAviationSafety" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="github-logo mr-2" // Add margin to the right of the logo
                      width="32"
                      height="32"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.91 11.84 2.63 11.65C2.37 11.48 1.82 11.07 2.49 11.06C3.15 11.04 3.57 11.77 3.73 12.03C4.44 13.07 5.55 12.73 6.05 12.5C6.12 12.09 6.33 11.8 6.56 11.61C4.76 11.42 2.91 10.73 2.91 7.77C2.91 6.88 3.23 6.16 3.74 5.59C3.67 5.39 3.42 4.2 3.82 3.15C3.82 3.15 4.49 2.93 6.02 4.06C6.67 3.91 7.34 3.83 8.02 3.83C8.69 3.83 9.36 3.91 10.01 4.06C11.54 2.93 12.21 3.15 12.21 3.15C12.61 4.2 12.36 5.39 12.29 5.59C12.8 6.16 13.13 6.88 13.13 7.77C13.13 10.74 11.27 11.42 9.47 11.61C9.76 11.86 10.01 12.39 10.01 13.08C10.01 14.01 10 14.92 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                      />
                    </svg>
                  <span className="fw-medium pl-3">
                    <p className="lead fw-medium mt-7">
                      View the project on GitHub
                    </p>
                  </span>
                  </a>
               </p>
               <p className="lead fw-medium">
                  In the United States, from 1983 to June 2023, there were 701 accidents involving gliders that resulted in some type of injury. Of those, 225 were fatal, 
                  268 resulted in serious injury, and 208 resulted in minor injuries.
              </p> 
              <AccidentMap />
              <h3 className='mt-10'>Top causes according to the NTSB</h3>
              <NTSBFindingsChart />
              </Col>
              <Col lg={12} className="post-content">
              <h3 className='mt-10'>Phases of Flight where accidents occur</h3>
              <PhasesChart />
              </Col>
              <Col lg={12} className="post-content">
              <h3 className='mt-10'>Accident Events</h3>
              <EventsChart />
              </Col>
              <Col lg={12} className="post-content">
              <h3 className='mt-10'>Top 20 keywords in causes</h3>
              <AccidentCausesWordCountChart />
              </Col>
              <Col lg={12} className="post-content">
              <h3 className='mt-10'>Accidents by Year</h3>
              <AccidentsByYearChart />
              </Col>
              <Col lg={12} className="post-content">
              <h3 className='mt-10'>Topic Modelling</h3>
              <p className="lead fw-medium">
              An analysis using Non-Negative Matrix Factorization (NMF) on the narrative descriptions of glider 
              accidents reveals five distinct topics, each characterized by a set of key words. These topics 
              provide insights into different aspects and causes of the accidents:
              </p>
              <p>
              <ul>
                <li><strong>Topic 1 - Airport and Landing:</strong> Key words like 'airport', 'field', 'glider', 'landing', and 'lift' suggest this topic is related to accidents occurring near or at the airport, possibly during landing phases. The mention of 'lift' and 'feet' might indicate issues with altitude or lift management during final approach.</li>
                <li><strong>Topic 2 - Pilot Actions and Aircraft Conditions:</strong> Words like 'plt' (pilot), 'amp', 'acft' (aircraft), 'rwy' (runway), and 'flt' (flight) indicate a focus on the pilot's actions and the condition of the aircraft. This could include pilot decision-making, handling of the aircraft, and runway operations.</li>
                <li><strong>Topic 3 - Tow Plane and Takeoff Operations:</strong> This topic, with words such as 'tow', 'glider', 'plane', 'takeoff', and 'pilot', is likely related to the initial phase of glider flights where the glider is towed by another plane. Incidents during takeoff or involving the tow rope are suggested by 'released', 'rope', and 'ground'.</li>
                <li><strong>Topic 4 - Mechanical and Operational Failures:</strong> The presence of words like 'x0d', 'reported', 'precluded', 'normal operation', 'malfunctions', and 'failures' indicates discussions about mechanical issues or operational failures in gliders. This topic might capture accidents where a mechanical fault or operational issue was a contributing factor.</li>
                <li><strong>Topic 5 - Training and Flight Patterns:</strong> This topic includes words like 'runway', 'glider', 'student', 'pilot', 'instructor', 'approach', 'final', 'flight', 'pattern', and 'aircraft'. It seems to be related to training flights or learning scenarios, including approach patterns and instruction.</li>
              </ul>
              </p>
              
              <TopicsChart />
              </Col>
              <Col lg={8} className="post-content">
              <h3 className='mt-40'>Methods</h3>
              <p>
                  <ul>
                    <li><strong>Data Loading and Preprocessing</strong>: The data was loaded from JSON and CSV files and preprocessed to clean and format it for analysis.</li>
                    <li><strong>Exploratory Data Analysis</strong>: The preprocessed data was explored to understand the distribution of accidents by injury severity, make and model of gliders, and accident rates.</li>
                    <li><strong>Time Series Analysis</strong>: The data was analyzed to understand the trend of accidents over time.</li>
                    <li><strong>Text Preprocessing</strong>: The narrative text in the accident reports was preprocessed by removing punctuation and special characters, converting all text to lower case, tokenizing the text into individual words, removing stop words, and lemmatizing the words to their root form.</li>
                    <li><strong>Topic Modeling</strong>: The preprocessed text was used to perform Topic Modeling using Non-negative Matrix Factorization (NMF) and Latent Dirichlet Allocation (LDA) to identify the common themes or issues in the accident narratives.</li>
                  </ul>
              </p>
            </Col>           
          </Row>
          <Row className="justify-content-center gh-1 mb-100">
            <Col lg={8} className="post-content">
              <h3>Recommendations for Improving Glider Pilot Community Safety</h3>
              <p>
                <ul
                  className="list-unstyled"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <li><strong>Enhanced Training on Atmospheric Conditions:</strong> Pilots should receive more rigorous training in understanding and reacting to various atmospheric conditions, especially those affecting lift.</li>
                  <li><strong>Decision-Making and Emergency Procedures:</strong> Emphasize training on timely decision-making, especially regarding landing decisions when conditions change unexpectedly.</li>
                  <li><strong>Focus on Landing Safety:</strong> Given the high number of incidents during landing, special focus should be given to training for safe landing techniques under various conditions.</li>
                  <li><strong>Regular Safety Briefings and Workshops:</strong> Organize frequent safety briefings and workshops focusing on the common causes of accidents and their prevention.</li>
                  <li><strong>Incident Analysis and Learning:</strong> Encourage a culture of learning from past incidents, where pilots can share experiences and lessons learned.</li>
                  <li><strong>Use of Technology and Weather Forecasting Tools:</strong> Encourage the use of advanced weather forecasting tools and technology to better prepare for and respond to atmospheric changes during flight.</li>
                  <li><strong>Mentorship and Peer Review:</strong> Encourage experienced pilots to mentor less experienced ones, and promote peer review and discussions about flight plans and decisions.</li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row className="gh-1 gv-1 mb-100">
            <Col sm={6} md={4} className="col-12" data-aos="fade-up">
              <Link
                to={BlogPost4}
                className="gallery-item gallery-item-lg"
                data-fancybox="gallery-2"
                data-aos="fade"
              >
                <img src={BlogPost4} alt="" />
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
                <p className="lead">
                  Share the skies with safety in mind. Fly safe, fly smart, and fly often.
                </p>
              </blockquote>
            </Col>
            <Col lg={8} className="col-12">
              <hr className="mt-n10 mb-30" />
              <Row className="gh-2 gv-1 justify-content-between">
                <Col className="col-auto">
                  <span className="fw-medium me-8">Tags:</span>{" "}
                  <Link to="/#">aviation</Link>,{" "}
                  <Link to="/#">glider</Link>,{" "}
                  <Link to="/#">safety</Link>
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

export default GliderAviationSafety;
