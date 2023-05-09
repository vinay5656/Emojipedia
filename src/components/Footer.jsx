import React from "react";

var name = "vinay singh chouhan";
var year = new Date().getFullYear();
function Footer() {
  return (
    <footer className="copyright">
      Created by {name} copyright @{year}
    </footer>
  );
}

export default Footer;
