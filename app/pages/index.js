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
        <div className='textblock'>
            <div className='textblock--text'>
                <h2 className='teaser__dates'>Oslo Spektrum, 7th – 8th September, 2016</h2>
                <h2 className='teaser__punchline'>Save the date.</h2>
            </div>
        </div>
    </div>
);