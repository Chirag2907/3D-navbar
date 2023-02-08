import React from "react";
import "./ContactPage.css";
const ContactPage = (props) => {
  const handleContact2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
    } else {
      props.func();
    }
  };
  return (
    <div>
      <main onClick={handleContact2} className="contact fourth">
        <div className="contact-inner contact-bookmark"><b>PAGE 4</b></div>
          {/* WRITE CONTENT HERE */}
      </main>
    </div>
  );
};

export default ContactPage;
