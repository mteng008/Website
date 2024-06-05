import './App.css';
import Navigation from './Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ucr from './unnamed.jpg';
import codingminds from './coding_minds_academy_logo.jpg';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Pong from './Pong.js';
import valdle from './valdle.png';
import minesweeper from './minesweeper.png';
import traffic from './traffic.png';
import pdf from './Matthew_Teng_Resume (1).pdf';
import me from './me.jpeg';
import dm from './dm.jpg';
import Skills from './Skills.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="home" className="mt-5 mb-5">
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col md={7} className="d-flex justify-content-end text-center">
              <div className="hero">
                <h1>Computer Science Student</h1>
                <p>Just a 20 year old guy trying to graduate in one piece. Here's pong if you're bored.</p>
              </div>
            </Col>
            <Col md={5} className="d-flex justify-content-start text-center">
              <Image src={me} roundedCircle style={{ width: '300px', height: '300px' }} />
            </Col>
          </Row>
          <Row className="justify-content-center"> {/* Added justify-content-center class */}
            <Pong />
          </Row>
        </Container>
      </section>

      <section id="about" className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={8} className="text-center">
              <h3>About Me</h3>
              <p>My name's Matthew and I'm a Computer Science student at the
                University of Riverside, California. I'm currently working on my 
                Bachelor's degree with plans to pursue a Master's degree as well.
                Here's my Resume: <a href={pdf}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </a>
              </p>
            
            </Col>
          </Row>
        </Container>
      </section>
      <section id="projects" className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={8} className="text-center">
              <h3>Projects</h3>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <Image src={traffic} style={{ width: '934px', height: '400px' }}/>
                  <Carousel.Caption>
                    <h3>Traffic Simulator</h3>
                    <p>Created a traffic simulator during the UCR Cutie Hack. Coded in HTML, CSS, and Javascript.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <Image src={valdle} style={{ width: '934px', height: '400px' }}/>
                  <Carousel.Caption>
                    <h3>Valdle</h3>
                    <p>Created a Wordle-like game involving Valorant trivia during the UCR Citrus Hack. Coded in HTML, CSS, and Javascript.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <Image src={minesweeper} style={{ width: '934px', height: '400px' }}/>
                  <Carousel.Caption>
                    <h3>Minesweeper</h3>
                    <p>
                      Created a fully functional minesweeper game in the terminal. Made use of C++, Putty, googletest, and Valgrind.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="skills" className="mt-5 mb-5">
        <Skills />
      </section>
      <section id="experience" className="mt-5 mb-5">
        <Container className="custom-container">
          <h3 className="text-center">Experience</h3>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className="d-flex justify-content-end mb-4">
              <Card className="experience-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={codingminds} />
                <Card.Body>
                  <Card.Title>Coding Minds Academy</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">August 2022 - August 2023</Card.Subtitle>
                  <Card.Text>
                  Taught Python, C++, and programming concepts.
                  Created individualized assignments to reinforce concepts learned in class.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex justify-content-start mb-4">
              <Card className="experience-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dm} />
                <Card.Body>
                  <Card.Title>Dexter Music</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">August 2022 - August 2023</Card.Subtitle>
                  <Card.Text >
                  Taught in home cello lessons to students.
                  Adapted teaching strategies to students' needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="education" className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={5} className="text-center">
              <h3>Education</h3>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={ucr} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Bachelor of Science in Computer Science</h5>
                      <p className="card-text">University of California, Riverside</p>
                      <p class="card-text"><small class="text-muted">2020 - Present</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <section id="contact" className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={8} className="text-center">
              <h3>Contact</h3>
              <a href="https://www.linkedin.com/in/matthew-teng-82076b200/">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
              
              <a href="https://github.com/mteng008">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>

              <a href="mteng008@ucr.edu">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
              </a>

            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default App;
