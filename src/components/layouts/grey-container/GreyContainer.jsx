import Card from "../../card/Card";
import './GreyContainer.scss';

function GreyContainer(props) {
    const cards = props.locations;

    const listItems = cards.map((card) =>
        <Card key={card.id} data={card} />
    );

    return (
        <div className="container">
            {listItems}
        </div>
    )
}

export default GreyContainer;