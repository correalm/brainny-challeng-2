import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const openMenu = () => {
    const sidebar = document.getElementsByClassName("sidebar")[0]
    const fill = document.getElementsByClassName("fill-menu")[0]
  
    sidebar.classList.toggle("sidebar-open")
    fill.classList.toggle("fill-menu-open")
  }
  return (
    <>
      <Header />
      <Sidebar />
      <div className='fill-menu' onClick={openMenu}></div>
      <Dashboard />
    </>
  );
}

export default App;
