import logo from '../assets/logo.svg';
import header from '../assets/header_2.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='teaser page'>
        <div className='page__header' style={headerStyle}>
            <h1 className="page__title teaser__title">JavaZone 2016</h1>
        </div>
        <div className='textblock--centered'>
            <div className='textblock--centered__text'>
                <h2 className='teaser__dates'>Oslo Spektrum, 7th – 8th September, 2016</h2>
                <p className='page__paragraph'>
                    The dates have been set. JavaZone 2016 will take place at Oslo Spektrum, 7th and 8th of September.
                    We are working hard to make JavaZone 2016 the most epic JavaZone ever – stay tuned for more info.
                </p>
            </div>
        </div>
    </div>
);