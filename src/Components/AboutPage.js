import React from "react";
import "./AboutPage.css";
const AboutPage = (props) => {
  const handleAbout2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
    } else {
      props.func();
    }
  };
  return (
    <div>
      <main onClick={handleAbout2} className="about third">
        <div className="about-bookmark">
          <b>PAGE 3</b>
        </div>
        {/* write content here */}

      </main>
    </div>
  );
};

export default AboutPage;
