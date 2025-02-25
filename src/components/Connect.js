import React from 'react'

const Connect = () => {
  return (
    <div>
       <section className="connect py-5 bg-light">
        <div className="container">
            <h2 className="headings mb-4">Connect</h2>

            {/* Contact Info Buttons */}
            <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="connect-btn">rameshrusum2001@gmail.com</button>
            <button className="connect-btn">+91 9390451420</button>
            </div>

            {/* Social Media Links */}
            <div className="social-media d-flex gap-4">
            <a href="https://www.linkedin.com/in/rameshr06" target="_blank" rel="noopener noreferrer">
                <img src="../tech/linkedin.svg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/Ramesh-dev-2001?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src="../tech/github.svg" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://wa.me/919390451420" target="_blank" rel="noopener noreferrer">
                <img src="../tech/whatsapp.svg" alt="whatsapp" className="social-icon" />
            </a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Connect
