import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { buildRecords } from '../../utils/buildRecords';
import './Dashboard.scss'

const data = buildRecords(20)
console.log(data)


const Dashboard = () => {

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className='content-dashboard'>
          <section className='content-controllers'>
            <h3>Lista de clientes</h3>
            <p>20 clientes cadastrados</p>
          </section>
          <section className='content-main'>TODO</section>
        </div>
      </div> 
    </>
  );
};

export default Dashboard;