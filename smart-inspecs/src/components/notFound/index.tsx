import { Container } from "./style";
import { Link, useNavigate } from "react-router-dom";
import iconYoutube from "../../assets/icon_youtube.png";
import iconInstagram from "../../assets/icon_instagram.png";
import iconFacebook from "../../assets/icon_facebook.png";




const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
        };
    const handleClick2 = () => {
        navigate("/");
        };
    return (
        <Container>
            <header>
                <nav>
                    <h2 className="logo">smart inspecs</h2>
                    <ul>
                        <li>
                            <Link to= "#inicio">início</Link>
                        </li>
                        <li>
                            <Link to= "#nossas">Nossas Soluções</Link>
                        </li>
                        <li>
                            <Link to= "#about">Sobre nós</Link>
                        </li>
                    </ul>
                    <button onClick={()=> handleClick()}>login</button>
                </nav>
            </header>
            <body>
                <section className="error__page-content">
                    <h2>Página não encontrada!</h2>
                    <h1>404</h1>
                    <button onClick={()=> handleClick2()}>Página inicial da Smart Inspecs</button>
                </section>
                <hr className="division" />
            </body>
            <footer className="baseboard">
                <section className="baseboard__company">
                    <h2 className="baseboard__logo">smart inspecs</h2>
                    <ul className="baseboard__list">
                        <li>
                            <Link className="baseboard__link" to="#inicio">Início</Link>
                        </li>
                        <li>
                            <Link  className="baseboard__link" to="#about">Sobre nós</Link>
                        </li>
                        <li>
                            <Link  className="baseboard__link" to="#">Fale Conosco</Link>
                        </li>
                    </ul>
                </section>
                <section className="baseboard__solutions">
                    <h2 className="baseboard__title">Nossas Soluções</h2>
                    <ul className="baseboard__list">
                        <li>
                            <Link className="baseboard__link" to="#">Inspeção de telhados e estruturas</Link>
                        </li>
                        <li>
                            <Link className="baseboard__link"to="#">Inspeção de segurança</Link>
                        </li>
                        <li> 
                            <Link className="baseboard__link" to="#">Reconhecimento de imagens</Link>
                        </li>
                    </ul>
                </section>
                <section className="baseboard__contact">
                    <h2 className="baseboard__title">Contato</h2>
                    <ul className="baseboard__list">
                        <li>
                            <Link className="baseboard__link" to="#">0000 111 222 33</Link>
                        </li>
                        <li>
                            <Link className="baseboard__link" to="#">meajuda@smartinspecs.com.br</Link>
                        </li>
                        <li>
                            <Link  className="baseboard__link" to="#">ouvidoria@smartinspecs.com.br</Link>
                        </li>
                    </ul>
                </section>
                <section className="baseboard__social-media">
                    <h2 className="baseboard__title">Nossas Redes</h2>
                    <ul className="baseboard__list networks-social__list">
                        <li>
                            <img src={iconYoutube} alt="Ícone do Youtube" />
                        </li>
                        <li>
                            <img src={iconInstagram} alt="Ícone do Instagram" />
                        </li>
                        <li>
                            <img src={iconFacebook} alt="Ícone do Facebook" />
                        </li>
                    </ul>
                    <h2 className="baseboard__logo">smart inspecs</h2>
                </section>
            </footer>
            <p className="copy">GETEC - UFBA - Todos os direitos reservados</p> 
        </Container>
    )
};

export default NotFound