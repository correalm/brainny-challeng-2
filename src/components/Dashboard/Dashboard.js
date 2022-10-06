import React from 'react'
import './Dashboard.scss'
import Card from '../Card/Card';
import { buildRecords } from '../../utils/buildRecords';
import { useClientsContext } from '../../context/ClientsContext';
import ButtonAddClient from '../Buttons/ButtonAddClient/ButtonAddClient';

const Dashboard = () => {

  const { clients, setClients } = useClientsContext()

  const addClient = () => {
    setClients([...clients, buildRecords(1, true)])
  }

  return (
    <>
      <div className="dashboard">
        <div className='content-dashboard'>
          <section className='content-controllers'>
            <div>
            <h3>Lista de clientes</h3>
            { clients && <p>{clients.length} clientes cadastrados</p> }
            </div>
            <ButtonAddClient onClickFunction={addClient}/>
          </section>
          <div className='content-main'>
            { clients && clients?.map(client => <Card data={client} key={client.id} />)}
          </div>
        </div>
      </div> 
    </>
  );
};

export default Dashboard;