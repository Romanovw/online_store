import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes';

const Header = () => {
  return(
  <div className='styles.header'>
    <div className='styles.logo'>

    </div>
    <Link to={ROUTES.HOME}>
    
    </Link>
    
    </div>) ;
};

export default Header;
