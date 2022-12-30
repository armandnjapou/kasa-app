import './Footer.scss';
import K from '../../../assets/images/K.png';
import logo from '../../../assets/images/kasa.png';
import S from '../../../assets/images/S.png';
import A from '../../../assets/images/A.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img src={K} alt="Logo" />
                <img src={logo} alt="Logo" />
                <img src={S} alt="Logo" />
                <img src={A} alt="Logo" />
            </div>
            <div>© 2020 Kasa. All rights reserved</div>
        </div>
    );
}