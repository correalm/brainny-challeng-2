import './Card.scss'
import trash from '../../assets/trash.svg'
import edit_icon from '../../assets/edit_icon.svg'

const Card = ({data}) => {

  return (
      <div className="card">
        <section className='card-controls'>
          <img src={ trash } alt='trash-icon' />
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