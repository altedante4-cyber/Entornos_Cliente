import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../estilosComponentes/Footer.css"

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="social-links-container">
                
                <a 
                    href="https://github.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    className="social-icon-link github"
                >
                    <FaGithub />
                </a>

                <a 
                    href="https://linkedin.com/in/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className="social-icon-link linkedin"
                >
                    <FaLinkedin />
                </a>

                <a 
                    href="https://twitter.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Twitter"
                    className="social-icon-link twitter"
                >
                    <FaTwitter />
                </a>

                <a 
                    href="https://instagram.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                    className="social-icon-link instagram"
                >
                    <FaInstagram />
                </a>

                <a 
                    href="mailto:tucorreo@ejemplo.com" 
                    aria-label="Correo electrónico"
                    className="social-icon-link email"
                >
                    <FaEnvelope />
                </a>

            </div>
        </footer>
    );
}