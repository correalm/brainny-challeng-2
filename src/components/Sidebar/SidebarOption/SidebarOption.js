import React, { useState } from 'react'
import './SidebarOption.scss'

const SidebarOption = ({text, img, id, onClickFunction, selected}) => {

  return (
    <>
    <div className='wrapper' onClick={ () => onClickFunction() }>
      {selected && selected.id === id && <div className='fill'></div>}
      <div id={id} className= 'option' >
        <img src={ img } alt='avatar'/>
        <p>{ text }</p>
      </div>
    </div>
      
    </>
  );
};

export default SidebarOption;