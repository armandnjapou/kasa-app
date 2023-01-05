import './Rating.scss';
import RedStar from '../../assets/images/red-star.png';
import GreyStar from '../../assets/images/grey-star.png';

export default function Rating(props) {

    const rating = props.rating;

    const listItems = [];

    for (let i = 1; i <= 5; i++) {
        if (i < rating) {
            listItems.push(<img key={i} src={RedStar} alt='red-star' />);
        } else listItems.push(<img key={i} src={GreyStar} alt='grey-star' />);
        
    }

    return (
        <div className='rating'>
            {listItems}
        </div>
    );
}