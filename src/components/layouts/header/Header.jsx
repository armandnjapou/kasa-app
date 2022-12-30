import './Header.scss'
import K from '../../../assets/images/K.png';
import logo from '../../../assets/images/kasa.png';
import S from '../../../assets/images/S.png';
import A from '../../../assets/images/A.png';

function Header() {
  return (
    <div className="header">
      <a href='/'>
        <img src={K} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={S} alt="Logo" />
        <img src={A} alt="Logo" />
      </a>
      <ul>
        <a href='/'><li>Accueil</li></a>
        <a href='/about'><li>A propos</li></a>
      </ul>
    </div>
  );
}

export default Header;