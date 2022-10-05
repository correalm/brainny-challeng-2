import Avatar from '@mui/material/Avatar'
import "./Header.scss"

const openMenu = () => {
  const sidebar = document.getElementsByClassName("sidebar")[0]
  sidebar.classList.toggle("sidebar-open")
}

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="header-container-links">
        <div onClick={openMenu} id="sidebar-menu">
          <div className='lines'>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <h1 className="header-title">Ponto Go</h1>
      </div>
      <Avatar 
        sx={
          { 
            bgcolor: '#fff', 
            color: '#5D5FF0',
            width: '30px',
            height: '30px',
          }
        } 
        src="/broken-image.jpg" />
    </div>
  </header>
);

export default Header;
