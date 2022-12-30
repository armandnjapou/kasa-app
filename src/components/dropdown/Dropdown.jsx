import './Dropdown.scss';
import Up from '../../assets/images/arrow-up.png';
import Down from '../../assets/images/arrow-down.png';
import { useState, useEffect } from 'react';
import React from 'react';

function Dropdown(props) {

    //isopen,content,header,size
    const { header, content, status, size, listItems } = props;

    const [isOpen, setIsOpen] = useState(status);

    const myRef = React.createRef();

    useEffect(() => {
        if (isOpen) {
            myRef.current.lastChild.classList.remove('hidden');
        } else {
            myRef.current.lastChild.classList.add('hidden');
        }
    });

    const MEDIUM = 'medium';

    let handleClick = (e) => {
        setIsOpen(!isOpen)
        if (isOpen) {
            e.target.nextSibling.classList.remove('hidden');
        } else {
            e.target.nextSibling.classList.add('hidden');
        }
    }

    let image, dropdownBody;

    if (isOpen) {
        image = <img src={Up} alt='Up' />;
    } else {
        image = <img src={Down} alt='Down' />;
    }

    if (listItems != null) {
        dropdownBody = listItems.map((item) => 
            <li key={item.id}>{item.title}</li>
        )
    }

    if (content != null) {
        dropdownBody = <p>{content}</p>
    }
    
    return (
        <ul ref={myRef} className='dropdown' style={size === MEDIUM ? {width: "582px"} : {width: "1023px"}}>
            <div className='dropdown__header' onClick={(e) => handleClick(e)}>
                {header}
                {image}
            </div>
            <div className='dropdown__body'>
                {dropdownBody}
            </div>
        </ul>
    );
}

export default Dropdown;