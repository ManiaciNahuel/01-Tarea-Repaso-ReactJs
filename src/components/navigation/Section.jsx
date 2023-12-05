import React from "react";
import { Links } from "./Links";
import { sections } from "../../data/Sections";

export const Section = () => {
  const ulStyle = "nav flex-column";
  const liStyle = "nav-item mb-2";
  const aStyle = "nav-link p-0 text-body-secondary";
  return (
    <>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>

          <Links options={{ links: sections, ulStyle, liStyle, aStyle }} />
      </div>
    </>
  );
};
