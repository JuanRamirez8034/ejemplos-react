import React from 'react';
import '../css/Testimonio.css';

const Testimonio = ({imagen, nombre, profesion}) => {
  return (
    <div className='testimonio-tarjeta'>
      <div className='contenedor-imagen-tarjeta-testimonio'>
        <img
          className='imagen-tarjeta-testimonio'
          src={imagen}
          alt='Foto de perfil'
        />
      </div>
      <div className='informacion-tarjeta-testimonio'>
        <p className='nombre-tarjeta-testimonio'>
          {nombre}
        </p>
        <p className='profesion-tarjeta-testimonio'>
          {profesion}
        </p>
        <p className='comentario-tarjeta-testimonio'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, 
          incidunt fugiat magnam quo ducimus omnis id similique quidem vero 
          minima, maxime exercitationem accusamus, temporibus possimus eveniet 
          iure veniam illo ab!
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
// module.export = Testimonio