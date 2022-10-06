import React from 'react'
import { buildRecords } from '../../utils/buildRecords';
import './Dashboard.scss'
import Card from '../Card/Card';

const clients = buildRecords(10)


const Dashboard = () => {

  return (
    <>
      <div className="dashboard">
        <div className='content-dashboard'>
          <section className='content-controllers'>
            <h3>Lista de clientes</h3>
            { clients && <p>{clients.length} clientes cadastrados</p> }
          </section>
          <div className='content-main'>
            { clients && clients.map(client => <Card data={client} key={client.id} />)}
          </div>
        </div>
      </div> 
    </>
  );
};

export default Dashboard;