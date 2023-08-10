import React from "react";

const date = new Date();
const currYear = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="p">Copyright ⓒ {currYear}</p>
    </footer>
  );
}

export default Footer;
