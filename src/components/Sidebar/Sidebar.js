import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import SidebarOption from './SidebarOption/SidebarOption'
import arrow from '../../assets/arrow.svg'
import admin_avatar from '../../assets/admin_avatar.svg'
import client_avatar from '../../assets/client_avatar.svg'
import workers_avatar from '../../assets/workers_avatar.svg'
import    admin_avatar_selected from   '../../assets/admin_avatar_selected.svg'
import   client_avatar_selected from  '../../assets/client_avatar_selected.svg'
import  workers_avatar_selected from '../../assets/workers_avatar_selected.svg'  


const Sidebar = () => {
  const [selected, setSelected] = useState({id: '2'})

  const toggleSelected = (id) => {
    const selecteds = Array.from(document.getElementsByClassName('option option-selected'))
    selecteds.forEach(element => {
      element.classList.remove('option-selected')
    });
    const option = document.getElementById(id)
    option.classList.toggle('option-selected')
    setSelected({id: id})
  }

  return (
    <>
      <div className="sidebar">
        <div className='content'>
          <div className="content content-options">
            <SidebarOption 
              id='1' 
              text='Administradores' 
              img={ selected && selected.id === '1' ? admin_avatar_selected   : admin_avatar }   
              selected={ selected } 
              onClickFunction={ () => toggleSelected('1') }
            />
            <SidebarOption 
              id='2' 
              text='Clientes'        
              img={ selected && selected.id === '2' ? client_avatar_selected  : client_avatar }  
              selected={ selected } 
              onClickFunction={ () => toggleSelected('2') } 
            />
            <SidebarOption 
              id='3' 
              text='Colaboradores'   
              img={ selected && selected.id === '3' ? workers_avatar_selected : workers_avatar } 
              selected={ selected } 
              onClickFunction={ () => toggleSelected('3') } 
            />
          </div>
          <div className="content content-footer">
            <div className='button-footer'>
              <img src={arrow} alt='arrow' />
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Sidebar;