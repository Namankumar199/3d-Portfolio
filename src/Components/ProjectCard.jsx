import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
function ProjectCard({ title, description, imgUrl, link }) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <h5>
                        <a href={link} target="_blank">
                            <span>
                                <FaLink />
                            </span>
                        </a>
                    </h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;
