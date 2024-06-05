import StackIcon from "tech-stack-icons";
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    const tooltipContent = {
        html5: 'HTML5',
        css3: 'CSS3',
        js: 'JavaScript',
        reactjs: 'ReactJS',
        cPlusPlus: 'C++',
        python: 'Python',
        git: 'Git'
      };
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col md={10} className="text-center">
                    <h3>Skills</h3>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.html5}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="html5" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.css3}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="css3" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.js}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="js" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.reactjs}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="reactjs" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.cPlusPlus}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="c++" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.python}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="python" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{tooltipContent.git}</Tooltip>}
                    >
                    <Button variant="link">
                        <StackIcon name="git" className="stack-icon" />
                    </Button>
                    </OverlayTrigger>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;

