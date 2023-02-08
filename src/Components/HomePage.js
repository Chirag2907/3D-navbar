import React from "react";
import "./HomePage.css";
const HomePage = (props) => {
  const handleHome2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
    } else {
      props.func();
    }
  };
  return (
    <div>
      
      <main onClick={handleHome2} className="home first">
      <div className="home-bookmark"><b>PAGE 1</b></div>
        {/* WRITE CONTENT HERE */}

      </main>
    </div>
  );
};

export default HomePage;
