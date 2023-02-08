import React from "react";
import "./ProjectPage.css";

const ProjectPage = (props) => {
  const handleProject2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
    } else {
      props.func();
    }
  };

  return (
    <div>
      <main onClick={handleProject2} className="project second">
        <div className="project-bookmark">
          <b>PAGE 2</b>
        </div>
        {/* write content here */}
      </main>
    </div>
  );
};

export default ProjectPage;
