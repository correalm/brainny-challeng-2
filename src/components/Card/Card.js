import './Card.scss'
import { useClientsContext } from '../../context/ClientsContext';
import trash from '../../assets/trash.svg'
import edit_icon from '../../assets/edit_icon.svg'

const Card = ({data}) => {

  const { setClients, clients } = useClientsContext()

  const removeClient = (id) => {
    setClients(clients.filter(client => client.id !== id))
  }

  return (
      <div className="card">
        <section className='card-controls'>
          <img onClick={() => removeClient(data.id)} src={ trash } alt='trash-icon' />
          <img src={ edit_icon } alt='edit-icon' />
        </section>
        <section className='card-content'>
          <h3>{ data.name }</h3>

          <div className='info'>
            <p>{ data.email }</p>
            <p>{ data.phone_number }</p>
          </div>
        </section>
      </div> 
  );
};

export default Card;