import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/projectImg/project-img1.png";
import projImg2 from "../assets/img/projectImg/project-img2.png";
import projImg3 from "../assets/img/projectImg/project-img3.png";
import projImg4 from "../assets/img/projectImg/project-img4.png";
import projImg5 from "../assets/img/projectImg/project-img5.png";
import projImg6 from "../assets/img/projectImg/project-img6.png";
import projImg7 from "../assets/img/projectImg/project-img7.png";
import projImg8 from "../assets/img/projectImg/project-img8.png";
import projImg9 from "../assets/img/projectImg/project-img9.png";
import { FaLink } from "react-icons/fa";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Projects() {

    const projects_tab1 = [
        {
            title: "AI Form Builder",
            description: "AI-driven tool for automating and customizing dynamic form creation",
            imgUrl: projImg1,
            link: 'https://github.com/Namankumar199/AI-Form-Builder-App'
        },
        {
            title: "Task Management System",
            description: "Efficient system for organizing, tracking, and managing tasks and projects.",
            imgUrl: projImg2,
            link: 'https://github.com/Namankumar199/Task-Management-System'
        },
        {
            title: "Blood Banking System",
            description: " Comprehensive platform for managing blood donations, inventory, and transfusions, ensuring efficient blood bank operations and patient care ",
            imgUrl: projImg3,
            link: '#'
        }
    ];

    const projects_tab2 = [
        {
            title: "RealTime Chat App",
            description: "Connect with friends and family seamlessly through real-time messaging and multimedia sharing in our chat app.",
            imgUrl: projImg8,
            link: 'https://github.com/Namankumar199/chat-App'
        },
        {
            title: "Car Parking System",
            description: "Intelligent parking system that optimizes space usage and reduces energy consumption through smart technology and efficiency features.",
            imgUrl: projImg5,
            link: 'https://github.com/Namankumar199/Car-Parking-System-with-Energy-save-capabilities'
        },
        {
            title: "Image Processing With OpenCV",
            description: "Advanced image analysis and manipulation using OpenCV library techniques.",
            imgUrl: projImg6,
            link: 'https://github.com/Namankumar199/Image-Processing'
        }
    ];

    const projects_tab3 = [

        {
            title: "TO-DO-LIST",
            description: "Simple and intuitive application for tracking and managing daily tasks and priorities.",
            imgUrl: projImg4,
            link: 'https://apna-to-do.vercel.app/'
        },
        {
            title: "Weather App",
            description: "A user-friendly application that provides real-time weather updates and personalized forecasts based on location.",
            imgUrl: projImg7,
            link: 'https://30-project.vercel.app/'
        },
        {
            title: "Calculator",
            description: "Perform quick and accurate calculations with our versatile and user-friendly calculator app.",
            imgUrl: projImg9,
            link: 'https://namankumar199.github.io/Calculator/'
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                        This project highlights my skills as a Software Developer through a dynamic
                                        portfolio built with React, featuring an engaging typing animation.
                                        Designed for responsiveness and accessibility, it integrates CI/CD
                                        practices for efficient deployment and a seamless user experience.

                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Major</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Medium</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Mini</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects_tab1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">

                                                <Row>
                                                    {
                                                        projects_tab2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects_tab3.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}

        </section>
    )
}

export default Projects
