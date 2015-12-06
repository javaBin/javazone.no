import logo from '../assets/logo.svg';
import header from '../assets/header_sal1.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='teaser page'>
        <div className='page__header' style={headerStyle}>
	       <h1 className="page__title teaser__title">15 Years of JavaZone</h1>
        </div>
        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
		<h2 className='textblock__title'>Oslo Spektrum<br />September 7–8th 2016</h2>
                <p className='page__paragraph'>
                    Join us in 2016 celebrating the 15th year of JavaZone. The largest community driven conference for developers.
                    The date is now set: JavaZone 2016 will take place at <br />Oslo Spektrum, 7th and 8th of September.<br /><br />
                    We are working hard to make JavaZone 2016 the most epic JavaZone ever.<br />Call for Speakers and ticket sales
                    will start in February, until then <a href="https://twitter.com/JavaZone" className="page__link">stay tuned</a>.
                </p>
            </div>
        </div>
    </div>
);