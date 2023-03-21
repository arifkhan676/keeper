import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <p>copyright @ {date} </p>
    </div>
  );
}
export default Footer;
