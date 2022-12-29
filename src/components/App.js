import Banner from "./banner/Banner";
import GreyContainer from "./layouts/grey-container/GreyContainer";

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
      <Banner />
      <GreyContainer cards={cards} />
    </>
  );
}

export default App;
