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
                    to take part in the Javazone experience.
                </p>
                <p>
                    We will bring great talks, food, mingling and great partners to <strong>Oslo</strong>,
                    <strong>Trondheim</strong> and <strong>Bergen</strong>. Join us for a great evening!
                </p>
            </div>
        </div>

        <ul className='academy__locations'>
            <li className='academy__location'>
                <h3>Oslo</h3>
                <p>February 16th</p>
            </li>
            <li className='academy__location'>
                <h3>Trondheim</h3>
                <p>February 17th</p>
            </li>
            <li className='academy__location'>
                <h3>Bergen</h3>
                <p>February 18th</p>
            </li>
        </ul>
    </div>
);
