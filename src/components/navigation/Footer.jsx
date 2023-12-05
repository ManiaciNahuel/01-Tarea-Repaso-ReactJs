import React from "react";
import { Section } from "./Section";
import { NewsLetter } from "./newsLetter.jsx";

export const Footer = () => {
  return (
    <>
      <footer className="py-5 px-5 bg-white container">
        <div className="row">
          <Section />
          <Section />
          <Section />

          <NewsLetter />
        </div>
      </footer>
    </>
  );
};
