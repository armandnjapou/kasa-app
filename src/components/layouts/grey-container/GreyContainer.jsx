import Card from "../../card/Card";
import './GreyContainer.scss';

function GreyContainer(props) {
    const cards = props.cards;

    const listItems = cards.map((card) =>
        <Card key={card.id} title={card.title} />
    );

    return (
        <div className="container">
            {listItems}
        </div>
    )
}

export default GreyContainer;