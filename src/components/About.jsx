import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <div className="about-content">

                    <h2>About Me</h2>

                    <h3>
                        Building applications with
                        <span> purpose and passion.</span>
                    </h3>

                    <p>
                        I am Uma Maheswari, a Computer Science graduate
                        from Amrita College of Engineering and Technology.
                        I am passionate about Java Backend Development
                        and building reliable, scalable applications.
                    </p>

                    <p>
                        I have worked on a Spring Boot Microservices
                        Shopping Cart project, where I explored REST APIs,
                        service communication, database integration and
                        backend development.
                    </p>

                    <p>
                        I enjoy learning new technologies, improving my
                        problem-solving skills and turning ideas into
                        practical applications.
                    </p>

                </div>

                <div className="about-details">

                    <div className="about-card">
                        <h4>Education</h4>
                        <p>BE Computer Science</p>
                        <span>Amrita College of Engineering and Technology</span>
                    </div>

                    <div className="about-card">
                        <h4>Specialization</h4>
                        <p>Java Backend Development</p>
                    </div>

                    <div className="about-card">
                        <h4>Project</h4>
                        <p>Shopping Cart Microservices</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;