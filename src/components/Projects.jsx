import React from "react";
import "./Projects.css";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                {/* SECTION HEADING */}
                <div className="projects-heading">
                    <h2>My Projects</h2>
                    <p>A collection of projects I've developed and explored.</p>
                </div>

                <div className="projects-grid">

                    {/* PROJECT 1 - SHOPPING CART */}
                    <div className="project-card featured-project">

                        <span className="project-category">
                            Backend Development
                        </span>

                        <h3>Shopping Cart Microservices</h3>

                        <h4>Java | Spring Boot | MySQL</h4>

                        <p className="project-description">
                            Developed a backend-focused Shopping Cart application
                            using Java and Spring Boot with a microservices
                            architecture. The application consists of independent
                            Product, Cart, Order and Payment services, allowing
                            customers to manage products, maintain shopping carts,
                            place orders and handle payment operations. REST APIs
                            enable communication between services, while the API
                            Gateway provides a central entry point for managing
                            requests.
                        </p>

                        <ul>
                            <li>Developed Product, Cart, Order and Payment microservices.</li>
                            <li>Integrated services using REST APIs and RestClient.</li>
                            <li>Configured API Gateway with authentication and authorization.</li>
                            <li>Implemented CRUD operations, validation and global exception handling.</li>
                            <li>Used MySQL and Spring Data JPA for database operations.</li>
                           
                        </ul>

                        <div className="project-tech">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Microservices</span>
                            <span>MySQL</span>
                            <span>Swagger</span>
                            <div>
                              
                            </div>
                            
                        </div>
   <a
                            href="https://github.com/vumamaheswari1126/Shopping-Cart-MicroServices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link" >
                            View on GitHub 
                        </a>
                       
                    </div>


                    {/* PROJECT 2 - STUDENT REGISTRATION */}
                    <div className="project-card">

                        <span className="project-category">
                            Frontend Development
                        </span>

                        <h3>Student Registration Form</h3>

                        <h4>HTML | CSS | JavaScript</h4>

                        <p className="project-description">
                            Designed and developed an student
                            registration form with a structured layout for
                            collecting student details. Used HTML for form
                            structure, CSS for styling and JavaScript to
                            handle user interactions and form behaviour.
                        </p>

                       

                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                           
    
                        </div>

                    </div>


                    {/* PROJECT 3 - FLIPKART */}
                    <div className="project-card">

                        <span className="project-category">
                            Website Development
                        </span>

                        <h3>Flipkart Website Replica</h3>

                        <h4>HTML | CSS | JavaScript</h4>

                        <p className="project-description">
                            Developed a Flipkart-inspired website replica
                            to understand real-world e-commerce website
                            layouts. Practised creating structured web
                            pages, styling components and adding
                            interactive frontend elements.
                        </p>

                       

                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;