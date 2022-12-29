import './Card.scss';

function Card(props) {

    const title = props.title;

    return (
        <div className="card">
            <p className="card__title">{title}</p>
        </div>
    );
}

export default Card;