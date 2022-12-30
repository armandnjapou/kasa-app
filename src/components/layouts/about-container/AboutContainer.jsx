import Dropdown from '../../dropdown/Dropdown';
import './AboutContainer.scss'

function AboutContainer(props) {

    const items = props.items;

    const listItems = items.map(item => {
        if (item.content != null) {
            return <Dropdown key={item.header} header={item.header} content={item.content} status={item.isOpen} size={item.size} />
        } else {
            return <Dropdown key={item.header} header={item.header} listItems={item.listItems} status={item.isOpen} size={item.size} />
        }
    });

    return (
        <div className='about-container'>
            {listItems}
        </div>
    );
    
}

export default AboutContainer;