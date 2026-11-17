import React from "react";
import "./Experience.css";

function Experience() {
    return (
        <section className="experience" id="experience">

            <div className="experience-container">

                <div className="experience-heading">
                    <h2>Experience & Projects</h2>
                    <p>Where I've learned, built and grown as a developer.</p>
                </div>

                <div className="experience-grid">

                    {/* INTERNSHIP */}

                    <div className="experience-card">

                        <span className="experience-type">INTERNSHIP</span>
<h3 className="experience-title">
    Full Stack Development Intern
</h3>

<h4 className="card-subtitle">AK Info Park</h4>

<p className="card-description">
    Completed a one-month internship in Full Stack Development,
    gaining hands-on experience in building responsive web pages
    and interactive applications using HTML, CSS and JavaScript.
</p>

                        <div className="contribution-list">
                            <p>01 <span>Developed a Student Registration Form.</span></p>
                            <p>02 <span>Created a Flipkart-inspired website replica.</span></p>
                            <p>03 <span>Worked with HTML, CSS and JavaScript.</span></p>
                            <p>04 <span>Practised webpage styling and interactivity.</span></p>
                        </div>

                        <div className="tech-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>

                    </div>

                    {/* PROJECT */}

                    <div className="experience-card">

                        <span className="experience-type">PERSONAL PROJECT</span>

                       <h3 className="experience-title">
    Shopping Cart Application
</h3>

<h4 className="card-subtitle">Java Backend Development</h4>
<p className="card-description">
    Developed a backend-focused Shopping Cart application using
    Java and Spring Boot Microservices. Gained practical experience
    in designing REST APIs, integrating services and managing
    product, cart, order and payment operations.
</p>

                        <div className="contribution-list">
                            <p>01 <span>Developed Product, Cart, Order and Payment services.</span></p>
                            <p>02 <span>Integrated services using REST APIs and RestClient.</span></p>
                            <p>03 <span>Implemented API Gateway and authentication features.</span></p>
                            <p>04 <span>Added validation and global exception handling.</span></p>
                            <p>05 <span>Integrated MySQL, Spring Data JPA and Swagger.</span></p>
                        </div>

                        <div className="tech-tags">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Microservices</span>
                            <span>MySQL</span>
                        </div>

                        <a
                            href="https://github.com/vumamaheswari1126/Shopping-Cart-MicroServices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-github"
                        >
                            Explore Project ↗
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Experience;