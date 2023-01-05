import './Card.scss';

function Card(props) {

    const data = props.data;
    let url = '/accomodation?id=' + data.id;

    return (
        <a href={url} className="card">
            <img src={data.cover} alt='Cover' />
            <p className="card__title">{data.title}</p>
        </a>
    );
}

export default Card;