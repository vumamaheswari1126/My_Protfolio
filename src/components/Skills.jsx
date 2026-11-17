import React from "react";
import "./Skills.css";

function Skills() {

    const skillCategories = [
        {
            title: "Backend Development",
            skills: ["Java", "Spring Boot", "Spring MVC", "Microservices", "REST APIs"]
        },
        {
            title: "Database",
            skills: ["MySQL", "SQL", "JDBC"]
        },
        {
            title: "Frontend Development",
            skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "GitHub", "Maven", "Postman", "Swagger", "Eclipse"]
        }
    ];

    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                <div className="skills-heading">
                    <h2>My Skills</h2>
                    <p>Technologies and tools I use to build applications.</p>
                </div>

                <div className="skills-grid">

                    {skillCategories.map((category, index) => (
                        <div className="skill-card" key={index}>

                            <h3>{category.title}</h3>

                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span className="skill-item" key={skillIndex}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;