import React from "react";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>contact</h1>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-warning">
            <h5 className="card-title">Contact</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="card-link">
              Card link
            </a>
            <a href="/" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
