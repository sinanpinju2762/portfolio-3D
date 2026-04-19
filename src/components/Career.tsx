import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing </h4>
                <h5>British Academy The Coach</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              I create digital content that helps brands grow online   social media visuals,
               campaign graphics, and video edits 
              that drive real engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI Designer</h4>
                <h5>Exouzia Protech Academy</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Designed UI screens and components for web and mobile products. Built design systems in Figma and improved user flows..
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>AdsPro Designing LLC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed interfaces for digital marketing and branding clients. Created wireframes, prototypes and high-fidelity designs in Figma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
