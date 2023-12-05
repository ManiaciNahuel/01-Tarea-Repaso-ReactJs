import React from "react";

export const Novedades = ({ news }) => {
  return (
    <>
      <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {news.map((item) => (
          <div className="feature col" key={item.id}>
            <h3 className="fs-2">{item.title}</h3>
            <p>
             {item.description}
            </p>
            <a href="#" className="text-info">
              Call to action
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
