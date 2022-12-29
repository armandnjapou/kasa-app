import './Banner.scss';

function Banner(props) {
    
    return (
        <div className="banner" style={{ background: `url(${props.background})` }}>
            <p>{props.title}</p>
        </div>
    );
}

export default Banner;