import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
