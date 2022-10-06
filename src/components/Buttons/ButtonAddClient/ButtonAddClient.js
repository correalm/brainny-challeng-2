import './ButtonAddClient.scss'
import avatar from '../../../assets/add_client_avatar.svg'


const ButtonAddClient = ({data, onClickFunction}) => {

  return (
      <div className="button-add-client" onClick={onClickFunction}>
        <p>+ Cadastrar cliente</p>
        <img src={avatar} alt='avatar' />
      </div> 
  );
};

export default ButtonAddClient;