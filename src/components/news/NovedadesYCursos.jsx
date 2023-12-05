import React from 'react'
import { Novedades } from './Novedades'
import { novedades } from '../../data/Novedades'
import { Cursos } from './Cursos'

export const NovedadesYCursos = () => {
  return (
      <>
      {/* Novedades y cursos */}
      <div className="px-4 py-5 " id="featured-3" style={{ backgroundColor: '#f7f8f9'}}>
        <div className='container'>
          <Novedades news={ novedades } />
          <Cursos/>
          
        </div>
      </div>
      
      </>
  )
}
