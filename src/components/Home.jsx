import React, { useState } from "react";
import "./Home.css";

function Home() {
    const [showResume, setShowResume] = useState(false);

    return (
        <section className="home" id="home">

            <div className="home-content">

                <p className="intro">HELLO, I'M</p>

                <h1>Uma Maheswari</h1>

                <h2>Java Backend Developer</h2>

                <p className="description">
                    <i>
                        BE Computer Science graduate passionate about
                        building reliable and scalable applications
                        using Java, Spring Boot and Microservices.
                        I enjoy learning new technologies and solving
                        real-world problems through programming.
                    </i>
                </p>

                <div className="home-buttons">

                    <a href="#projects" className="btn-primary">
                        View My Projects
                    </a>

                    <button 
                        className="btn-secondary"
                        onClick={() => setShowResume(true)}
                    >
                        View Resume
                    </button>

                </div>

                

            </div>

            <div className="home-image">
                <img src="/image.jpg" alt="Uma Maheswari" />
            </div>

            {/* RESUME POPUP */}

            {showResume && (
                <div className="resume-overlay">

                    <div className="resume-modal">

                        <div className="resume-header">
                            <h3>My Resume</h3>

                            <div className="resume-actions">

                                <a
                                    href="/Uma_Resume.pdf"
                                    download
                                    className="resume-download"
                                >
                                    Download
                                </a>

                                <button
                                    className="resume-close"
                                    onClick={() => setShowResume(false)}
                                >
                                    ✕
                                </button>

                            </div>
                        </div>

                        <iframe
                            src="/Uma.Maheswari_Resume.pdf.pdf#toolbar=0&navpanes=0&view=FitH"
                            title="Uma MaheswariResume"
                            className="resume-frame"
                        />

                    </div>

                </div>
            )}

        </section>
    );
}

export default Home;