import './Host.scss';

export default function Host(props) {
    
    const host = props;
    const tab = host.name.split(' ');
    const [firstname, lastname] = tab;

    return (
        <div className='host'>
            <span>{firstname} <br /> {lastname}</span>
            <img src={host.picture} alt='host' />
        </div>
    );
}