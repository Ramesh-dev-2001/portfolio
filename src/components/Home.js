import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <section className="home vh-100 d-flex align-items-center text-center text-white bg-light">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8">
                <h1 className="display-4 fw-bold home-title text-dark">
                <span className="text-warning">Hi</span>, I'm Rusum Ramesh
                </h1>
                <h2 className="fw-bold text-dark home-subtitle">Full-Stack Developer</h2>
                <p className="lead home-description text-dark">
                I build scalable, high-performance web applications using the latest technologies.
                With expertise in both frontend and backend development, I create seamless user experiences 
                and robust system architectures. Passionate about problem-solving, innovation, and 
                delivering efficient solutions that meet modern business needs.
                </p>
                <div className="mt-4">
                <Link to="/work" className="btn btn-warning btn-lg me-2">
                    View My Work
                </Link>
                <a href="https://wa.me/919390451420" className="btn btn-outline-dark btn-lg">
                    Contact Me
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>


      {/* About Me Section */}
      <section className="about-section py-5 bg-light text-dark">
        <div className="container">
          <h2 className="headings mb-4">About Me</h2>
          <div className="row align-items-center mt-4">
            <div className="col-md-12">
              <h2 className="big-text">
                <span>Bringing brand ideas to life. Let's build great things – no nonsense, </span>  
                <span>always on the cutting edge. We're a team of experienced professionals dedicated to crafting innovative and impactful solutions.</span>  
                <br />
                <span>We cut through the noise and focus on what matters: your success.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* My Works Section */}
      <section className="my-works py-5 bg-white">
        <div className="container">
          <h2 className="headings mb-4">My Works</h2>
            <div className="row align-items-center">
                <div className="col-md-12 text-end mb-3">
                <a
                    href="https://victorydegreecollege.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-lg"
                >
                    View Site
                </a>
                </div>

                <div className="col-md-12 text-center">
                <img
                    src="victorydegreecollege.jpg"
                    alt="Victory Degree College Website"
                    className="img-fluid shadow-lg"
                    style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
                </div>

                <div className="col-md-12 mt-3">
                <h3>College Website</h3>
                <p>A detailed website offering comprehensive information about the college.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-12 text-end mb-3">
                <a
                    href="https://39properties.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-lg"
                >
                    View Site
                </a>    
                </div>

                <div className="col-md-12 text-center">
                <video 
                    src="../tech/video.mp4" // Path to your video file
                    controls // Show video controls (play, pause, volume, etc.)
                    width="100%" // Make the video responsive
                    height="auto" // Maintain aspect ratio
                    poster="path/to/your/poster.jpg" // Optional: Display a poster image before the video plays
                >
                    Your browser does not support the video tag.  {/* Fallback message */}
                </video>
                </div>

                <div className="col-md-12 mt-3">
                    <h3>Find Your Ideal Property</h3>
                    <p>Discover a wide range of properties, including houses, fields, apartments, and individual homes, to find the perfect place for you.</p>
                </div>
            </div>
        </div>
      </section>

      {/* My Stack Section */}
      <section className="my-stack py-5 bg-light">
        <div className="container">
          <h2 className="headings mb-4">My Stack</h2>
          </div>

          <div className="row text-center pt-4">
            {/* Row 1 */}
            <div className="col-3">
              <img src="../tech/firebase.svg" alt="Firebase" className="stack-icon" />
              <p>Firebase</p>
            </div>
            <div className="col-3">
              <img src="../tech/github.svg" alt="GitHub" className="stack-icon" />
              <p>GitHub</p>
            </div>
            <div className="col-3">
              <img src="../tech/redis.svg" alt="AntD" className="stack-icon" />
              <p>Redis</p>
            </div>
            <div className="col-3">
              <img src="../tech/postman.svg" alt="Figma" className="stack-icon" />
              <p>Postman</p>
            </div>

            {/* Row 2 */}
            
            <div className="col-3">
              <img src="../tech/bootstrap.svg" alt="Bootstrap" className="stack-icon" />
              <p>Bootstrap</p>
            </div>
            <div className="col-3">
              <img src="../tech/mysql.svg" alt="mysql" className="stack-icon" />
              <p>Mysql</p>
            </div>
            <div className="col-3">
              <img src="../tech/mongodb.svg" alt="MongoDB" className="stack-icon" />
              <p>MongoDB</p>
            </div>

            {/* Row 3 */}
            <div className="col-3">
              <img src="../tech/git.svg" alt="Next.js" className="stack-icon" />
              <p>Git</p>
            </div>
            <div className="col-3">
              <img src="../tech/html.svg" alt="HTML" className="stack-icon" />
              <p>HTML</p>
            </div>
            <div className="col-3">
              <img src="../tech/css.svg" alt="css" className="stack-icon" />
              <p>Css</p>
            </div>
            <div className="col-3">
              <img src="../tech/javascript.svg" alt="JavaScript" className="stack-icon" />
              <p>JavaScript</p>
            </div>
            <div className="col-3">
              <img src="../tech/react.svg" alt="React" className="stack-icon" />
              <p>React</p>
            </div>

            {/* Row 4 */}
            <div className="col-3">
              <img src="../tech/nodejs.svg" alt="CSS" className="stack-icon" />
              <p>Nodejs</p>
            </div>
            <div className="col-3">
              <img src="../tech/express.svg" alt="React" className="stack-icon" />
              <p>Express Js</p>
            </div>
            <div className="col-3">
              <img src="../tech/php.svg" alt="CSS" className="stack-icon" />
              <p>Php</p>
            </div>
          </div>
      </section>

      <section className="experience">
        <div className="container">
            <h2 className="headings mb-4">Experience</h2>
        </div>
        <hr/>
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-2"><h4>Freelancer</h4></div>
                <div className="col-md-10">
                    <h4>Website Developer</h4>
                    <p>Developed the website for <a href="https://victorydegreecollege.com" target="_blank" rel="noopener noreferrer">Victory Degree College</a>.</p>                </div>
            </div>
        </div>
        <hr/>
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-2"><h4> Intership</h4></div>
                <div className="col-md-10"><h4>Full stack developer</h4><p>Laalabs Pvt Ltd</p></div>
            </div>
        </div>
        <hr/>
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-2"><h4> 2023</h4></div>
                <div className="col-md-10">
                    <h4>Wrote my first lines of code</h4>
                    <p>Dipped my toes into the world of code by printing "Hello, World!"</p>
                </div>
            </div>
        </div>
        <hr/>
      </section>

    </>
  );
};

export default Home;
