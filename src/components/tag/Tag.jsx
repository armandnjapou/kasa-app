import './Tag.scss';

export default function Tag(props) {
    return (
        <span className='tag'>{props.title}</span>
    );
}