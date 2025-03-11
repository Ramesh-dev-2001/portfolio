import React from "react";

const About = () => {
  return (
    <>
    <section id="about" className="about-page bg-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Image Section */}
          <div className="col-md-5 text-center">
            <img
              src='logo.jpg' // Replace with your image
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-7 text-center text-md-start mt-4 mt-md-0">
            <h2 className="headings">About Me</h2>
            <h2 className="about-page-text">
              Hello 👋, This is Ram. A full-stack Developer living in Hyderabad. 
            </h2>
            <h4 className="about-page-me ">
            I've always been interested in how organizations function and the systems 
            that keep them running smoothly.  Learning about the critical role of technology in 
            corporate offices inspired me to start my coding journey. This portfolio showcases my projects, 
            demonstrating my understanding of software development principles and my ability to build robust web applications.
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section className="services">
        <div className="container">
            <h2 className=" headings mb-4 mt-4">Services</h2>
        </div>
        <hr/>
        <div className="container">
                <div className="col-md-12 p-4"><h3>Full Stack Developer</h3><span>I plan, design, and build user-friendly web applications.</span></div>
        </div>
        <hr/>
    </section>

   </>
  );
};

export default About;
