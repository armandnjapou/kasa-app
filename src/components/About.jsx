import Banner from "./banner/Banner";
import Background from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
import AboutContainer from "./layouts/about-container/AboutContainer";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

function About() {

    const items = [
        { 'header': 'Fiabilité', 'content': 'Contenu Fiabilité', 'isOpen': false, 'size': 'large' },
        { 'header': 'Respect', 'content': 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.', 'isOpen': true, 'size': 'large' },
        { 'header': 'Service', 'content': 'Contenu Service', 'isOpen': false, 'size': 'large' },
        { 'header': 'Responsabilité', 'content': 'Contenu Responsabilité', 'isOpen': false, 'size': 'large' }
    ];

    return (
        <div class="main">
            <Header />
            <Banner background={Background} />
            <AboutContainer items={items} />
            <Footer />
        </div>
    );
}

export default About;