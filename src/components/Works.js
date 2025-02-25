import React from "react";

const Home = () => {
  return (
    <>

      {/* My Works Section */}
      <section className="my-works works-page py-5 bg-white">
        <div className="container">
          <h2 className="works-text">Have a look at some of the projects I've worked on....<br/>feel free to contact me if you have any questions.</h2>
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
                    View
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
    </>
  );
};

export default Home;
