import React from "react";

export const Links = ({ options }) => {
  console.log(options);
  return (
    <>
      <ul className={options.ulStyle}>
        {options.links.map((option) => (
          <li className={options.liStyle} key={option.id}>
            <a
              className={options.aStyle}
              aria-current="page"
              href={option.name}
            >
              {option.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
