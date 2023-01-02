import Banner from "./banner/Banner";
import GreyContainer from "./layouts/grey-container/GreyContainer";
import Background from '../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import data from '../assets/data.json';

function HomePage() {

  return (
    <div className="main">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" background={Background} />
      <GreyContainer locations={data} />
      <Footer />
    </div>
  );
}

export default HomePage;
