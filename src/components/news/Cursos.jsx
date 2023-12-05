import React from 'react'

export const Cursos = () => {
  return (
      <>
          <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
          </div>
          </>
  )
}
