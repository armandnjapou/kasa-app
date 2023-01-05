import './Carrousel.scss';
import ArrowLeft from '../../assets/images/arrow-left.png';
import ArrowRight from '../../assets/images/arrow-right.png';
import { useState } from 'react';

export default function Carrousel(props) {

    const pictures = props.pictures;

    const NEXT = 'next', PREV = 'prev';
    const [imgSrc, setImageSrc] = useState(pictures[0]);
    const [carrouselCounter, setCarrouselCounter] = useState('1/' + pictures.length);

    let handleClick = (action) => {
        let index = getIndex(getCurrent());
        if (action === NEXT) {
            let next = getNext(index);
            updateCarrousel(next);
        } else if(action === PREV) {
            let prev = getPrevious(index);
            updateCarrousel(prev);
        }
    }

    let getIndex = (element) => {
        return pictures.indexOf(element);
    }

    let getCurrent = () => {
        return imgSrc;
    }

    let getNext = (index) => {
        return index === pictures.length - 1 ? pictures[0] : pictures[index + 1];
    }

    let getPrevious = (index) => {
        return index === 0 ? pictures[pictures.length-1] : pictures[index - 1];
    }

    let updateCarrousel = (element) => {
        setImageSrc(element);
        let elementIndex = getIndex(element)+1;
        setCarrouselCounter(elementIndex + '/' + pictures.length);
    }

    return (
        <div className='carrousel'>
            <img className='carrousel__img' src={imgSrc} alt='first-pic' />
            <div className='carrousel__container'>
                <img className='carrousel__arrow' src={ArrowLeft} alt='arrow-left' onClick={() => handleClick(PREV)} />
                <img className='carrousel__arrow' src={ArrowRight} alt='arrow-right' onClick={() => handleClick(NEXT)} />
            </div>
            <span className='carrousel__counter'>{carrouselCounter}</span>
        </div>
    );
}