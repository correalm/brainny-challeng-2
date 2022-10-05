import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-Alchemy.png'
import tankLogo from '../../assets/alchemySideBarLogo.svg'
import { useUserContex } from '../../context/UserContext'
import { useAuthContext } from '../../context/AuthContext'
import Loading from '../Utilities/Loading/Loading'

let path = window.location.pathname;

const Sidebar = () => {
  const {logout} = useAuthContext()
  const { fetch, user } = useUserContex()

  useEffect(() => {
    fetch()
  }, [])

  const [className, setClassName] = useState(
    path === "/"
      ? 1
      : path === "/agricultural-input"
      ? 2
      : path === "/machinery"
      ? 3
      : path === "/area"
      ? 4
      : null
  );

  const [sectionSelect, setSectionSelect] = useState(
    path !== "/user-panel" ? false : true
  );

  // useEffect(() => {
  //   document.addEventListener("mousedown", () => {
  //     setClassName(false)
  //   })
  // })

  const closeMenu = () => {
    const sidebar = document.getElementsByClassName('sidebar')[0]
    sidebar.classList.remove('sidebar-open')
  }

  return (
    <>
      <aside className="sidebar">
        <div className='fillMenu' onClick={closeMenu}></div>
        <div className="sidebar-options">
          <div className="sidebar-title">
            <h1>
              <span>
              <img className='tankLogo' src={tankLogo} alt="tankLogo-alchemy-app" />
              </span>
              <img src={Logo} alt="logo-alchemy-app" />
            </h1>
          </div>
          <div className="options-label">
            <p></p>
          </div>
          <div
            className={
              !sectionSelect
                ? "selected_section" + " " + "section-title"
                : "section-title"
            }
          >
            <h3 className="options-title">
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>{" "}
              Análise de calda
            </h3>
          </div>

          <div
            className={
              className === 1 && !sectionSelect
                ? "selected_link" + " " + "selected"
                : "selected"
            }
          >
            <Link
              to="/"
              className="options-subtitle"
              onMouseDown={() => setSectionSelect(false)}
              onClick={() => {
                setClassName(1)
                closeMenu()
              }}
            >
              Análises
            </Link>
          </div>

          <div
            className={
              className === 2 && !sectionSelect
                ? "selected_link" + " " + "selected"
                : "selected"
            }
          >
            <Link
              to="/agricultural-input"
              className="options-subtitle"
              onMouseDown={() => setSectionSelect(false)}
              onClick={() => {
                setClassName(2)
                closeMenu()
              }}
            >
              Insumos
            </Link>
          </div>

          <div
            className={
              className === 3 && !sectionSelect
                ? "selected_link" + " " + "selected"
                : "selected"
            }
          >
            <Link
              to="/machinery"
              className="options-subtitle"
              onMouseDown={() => setSectionSelect(false)}
              onClick={() => {
                setClassName(3)
                closeMenu()
              }}
            >
              Maquinário
            </Link>
          </div>
          <div
            className={
              className === 4 && !sectionSelect
                ? "selected_link" + " " + "selected"
                : "selected"
            }
          >
            <Link
              to="/cultures"
              className="options-subtitle"
              onMouseDown={() => setSectionSelect(false)}
              onClick={() => {
                setClassName(4)
                closeMenu()
              }}
            >
              Culturas
            </Link>
          </div>

          <div className="sidebar_footer">
            <div className={sectionSelect ? "user_panel-link-selected" : "user_panel-link"} onMouseDown={() => setSectionSelect(true)} >

              {user ? 
                <Link onClick={() => closeMenu()} to="/user-panel" className='options-title'>
                    <i className="fa-solid fa-user"></i>
                    <p className='user-name'>{user.name || user.email}</p>
                  </Link> : <Loading size={3} height='35px' />}
              <span className='logout-container' onClick={() => logout()}><i className="logout-icon fa-solid fa-right-from-bracket"></i></span>

            </div>
          </div>
        </div>
      </aside> 
    </>
  );
};

export default Sidebar;