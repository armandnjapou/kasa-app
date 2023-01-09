import '../css/AccomodationPage.scss';
import Carrousel from './carrousel/Carrousel';
import Footer from './layouts/footer/Footer';
import Host from './host/Host';
import Header from './layouts/header/Header';
import data from '../assets/data.json';
import Tag from './tag/Tag';
import Rating from './rating/Rating';
import Dropdown from './dropdown/Dropdown';
import { Navigate } from 'react-router-dom';

export default function AccomodationPage(props) {

    const DESC = 'Description', EQUIPMENT = 'Equipements';

    let params = new URLSearchParams(document.location.search);
    const id = params.get('id');
    const accomodation = data.find(card => card.id === id);
    
    let pictures = [], tags = [];

    if (accomodation) {
        pictures = accomodation.pictures;
        tags = accomodation.tags.map((tag) => <Tag key={tag} title={tag} />);
    }
    

    return (
        <>
            {!accomodation && (<Navigate to='/error' replace={true} />)}
            {accomodation && (
                <>
                    <div className='main'>
                        <Header />
                        <Carrousel pictures={pictures} />
                        <div className='accomodation-page'>
                            <div className='half-width'>
                                <h1 className='accomodation-page__title'>{accomodation.title}</h1>
                                <h3 className='accomodation-page__subtitle'>{accomodation.location}</h3>
                                {tags}
                            </div>
                            <div className='half-width accomodation-page__right'>
                                <Host name={accomodation.host.name} picture={accomodation.host.picture} />
                                <Rating rating={accomodation.rating} />
                            </div>
                        </div>
                        <div className='content'>
                            <Dropdown header={DESC} content={accomodation.description} status={true} size='medium' />
                            <Dropdown header={EQUIPMENT} status={true} size='medium' listItems={accomodation.equipments} />
                        </div>
                    </div>
                    <Footer />
                </>
            )}
            
        </>
    );
}