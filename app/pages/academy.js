import header from '../assets/header_expo.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='page academy'>
        <div className='page__header page__header-centered' style={headerStyle}>
            <h1 className='page__title'>JavaZone Academy</h1>
        </div>

        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <h2 className='textblock__title'>A free taste of JavaZone for students</h2>
                <p>
                    Are you a student? Interested in IT? Come join us for JavaZone Academy 2015.
                    JavaZone Academy is a free event for student in Norway, where we invite you
                    to take part in the Javazone experience. Oslo has already had its go during
                    JavaZone, next up is Trondheim and Bergen.
                </p>
                <p>
                    Get access to great talks, food, mingling and our great partners for a whole evening
                    – a great taste of the full JavaZone experience. See you there!
                </p>
            </div>
        </div>
    </div>
);
