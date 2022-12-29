import Banner from "./banner/Banner";
import GreyContainer from "./layouts/grey-container/GreyContainer";
import Background from '../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';

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
    <>
      <Banner title="Chez vous, partout et ailleurs" background={Background} />
      <GreyContainer cards={cards} />
    </>
  );
}

export default App;
