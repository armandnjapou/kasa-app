import Banner from "./banner/Banner";
import GreyContainer from "./layouts/grey-container/GreyContainer";
import Background from '../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

function App() {
  let cards = [];

  for (let i = 1; i <= 6; i++) {
    let card = {
      'id': i,
      'title': 'Titre de la location'
    }
    cards.push(card);
  }

  return (
    <div class="main">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" background={Background} />
      <GreyContainer cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
