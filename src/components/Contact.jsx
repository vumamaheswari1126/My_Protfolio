import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <div className="contact-heading">
                    <h2>Let's Connect</h2>
                    <p>
                        I'm looking for opportunities to start my career
                        as a Java Backend Developer.
                    </p>
                </div>

                <div className="contact-content">
                    <h3>Have an opportunity?</h3>

                    <p>
                        Feel free to reach out. I'd be happy to discuss
                        opportunities, projects and collaborations.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:vumamaheswari1126@gmail.com">
                            ✉ Email
                        </a>

                        <a href="tel:9790540568">
                            ☎ Phone
                        </a>

                        <a
    href="https://www.linkedin.com/in/uma-maheswari"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
>
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.7H5.58V18h2.76ZM6.96 8.55a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM18.42 18v-4.55c0-2.44-1.3-3.58-3.03-3.58a2.62 2.62 0 0 0-2.37 1.3V9.7h-2.76V18h2.76v-4.1c0-1.08.2-2.13 1.55-2.13 1.33 0 1.35 1.24 1.35 2.2V18h2.5Z"
        />
    </svg>
    LinkedIn 
</a>

<a
    href="https://github.com/vumamaheswari1126"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
>
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
            fill="currentColor"
            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.6 5.24-5.09 5.52.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
    </svg>
    GitHub 
</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;