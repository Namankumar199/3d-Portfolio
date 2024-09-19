import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import certiImg1 from "../assets/img/certificateImg/certImg-1.png";
import certiImg2 from "../assets/img/certificateImg/certImg-2.png";
import certiImg3 from "../assets/img/certificateImg/certImg-3.png";
import certiImg4 from "../assets/img/certificateImg/certImg-4.png";
import certiImg5 from "../assets/img/certificateImg/certImg-5.png";
import certiImg6 from "../assets/img/certificateImg/certImg-6.png";
import certiImg8 from "../assets/img/certificateImg/certImg-8.png";
import certiImg9 from "../assets/img/certificateImg/certImg-9.png";
import certiImg10 from "../assets/img/certificateImg/certImg-10.png";



// import colorSharp1 from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import colorSharp from "../assets/img/color-sharp.png"


function Certificates() {
    const certificate_tab1 = [
        {
            title: "C++ Developer",
            description: "Udemy",
            imgUrl: certiImg1,
            link: "https://www.udemy.com/certificate/UC-b952f456-e0fe-4b64-a57f-a4d4e322094b/"
        },
        {
            title: "Java",
            description: "Nptel certificate",
            imgUrl: certiImg2,
            link: "https://media.licdn.com/dms/document/media/D561FAQGg2MeBtUWPAw/feedshare-document-pdf-analyzed/0/1701271263491?e=1727308800&v=beta&t=dcP9gStZCTLDHZqVz7J3GNudsTox2Et6JZKjOkuKDQI"
        },
        {
            title: "Introduction of Data Science",
            description: "Cisco",
            imgUrl: certiImg3,
            link: "https://www.credly.com/badges/47201222-afd8-47f4-9671-e40206ca67bc/linked_in?t=ryg4aj"
        }
    ];
    const certificate_tab2 = [
        {
            title: "Research Paper",
            description: "National Conference on Computing Technology 2023",
            imgUrl: certiImg4,
            link: "https://www.linkedin.com/posts/naman-kumar-5916a7182_research-certificate-professionaldevelopment-activity-7061397128790605824-CqJi?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Opera-24",
            description: "College Project Show Case Event",
            imgUrl: certiImg5,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7193752429710958592/"
        },
        {
            title: "Sql Basic",
            description: "Hacker Rank",
            imgUrl: certiImg6,
            link: "https://www.hackerrank.com/certificates/b60a2d56dc47"
        }
    ];

    const certificate_tab3 = [
        {
            title: "Basics Of Python",
            description: "Infosys",
            imgUrl: certiImg8,
            link: "https://media.licdn.com/dms/document/media/D561FAQFZOrN9SuSFjQ/feedshare-document-pdf-analyzed/0/1704305684770?e=1727308800&v=beta&t=lg67WnuCFxHk6CzbgiOALcPmMVODIFziLnorqUKBIX8"
        },
        {
            title: "Problem Solving",
            description: "Hacker Rank",
            imgUrl: certiImg9,
            link: "https://www.hackerrank.com/certificates/0131a209ddd1"
        },
        {
            title: "Skill Badge",
            description: "Coding Ninja",
            imgUrl: certiImg10,
            link: "https://www.naukri.com/code360/profile/85141866-6b64-4d0c-9172-9a28e3182bdf?utm_source=linkedin&amp;utm_campaign=PracticeTopic_Achiever&amp;utm_medium=shareable_moments_codestudio"
        }
    ];

    return (

        <section className="project certificate" id="certificates">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Certificates & Achievemenst</h2>
                                    <p>
                                        Earned certifications in emerging technologies and software development practices,
                                        demonstrating my commitment to continuous learning and professional growth.
                                        Recognized for successfully leading projects that enhanced team collaboration
                                        and efficiency.

                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        certificate_tab1.map((project, index) => {
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
                                                        certificate_tab2.map((project, index) => {
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
                                                        certificate_tab3.map((project, index) => {
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
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section >
    )
}

export default Certificates
