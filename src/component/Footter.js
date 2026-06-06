import React from "react";
import "../styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Moviedux, All rights reserved.
      </p>
    </div>
  );
}
