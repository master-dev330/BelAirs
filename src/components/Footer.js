import './footer.css';
import logo from '../assets/img/logo.png';

const Footer = () => {
    return (
        <div className="footer-box">
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <footer className="bg-dark text-white mt-5 p-4 text-center">
                    <div className="f-link mb-5 text-muted">
                          <p>Mentions légales</p>
                          <p>CGU</p>
                          <p>CGV</p>
                          <p>Politique d'annulation</p>
                          <p>FAQ</p>
                          <p>RGPD.</p>
                    </div>
                    <div>
                        <div className="col">
                            <div className='copyright text-muted'>
                                © {new Date().getFullYear()}{" "}, All Rights Reserved
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    );
}

export default Footer;