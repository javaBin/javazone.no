import header from '../assets/academy.jpg';

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
                    Are you a student? Interested in IT? Come join us for JavaZone Academy.
                    JavaZone Academy is a free event for students in Norway, where we invite you
                    to take part in the Javazone experience.
                </p>
                <p>
                    We will bring great talks, food, mingling and great partners to <strong>Oslo</strong>,
                    <strong>Bergen</strong> and <strong>Trondheim</strong>. Join us for a great evening!
                </p>
            </div>
        </div>

        <ul className='academy__locations'>
            <li className='academy__location'>
                <h3>Oslo</h3>
                <p>February <strong>16th</strong></p>
                <p>@ <a href="http://www.teknologihuset.no/">Teknologihuset</a><br/>with 120 students</p>
            </li>
            <li className='academy__location'>
                <h3>Bergen</h3>
                <p>February <strong>17th</strong></p>
                <p>@ <a href="http://kvarteret.no/">Det Akademiske Kvarter</a><br/>with 120 students</p>
            </li>
            <li className='academy__location'>
                <h3>Trondheim</h3>
                <p>February <strong>18th</strong></p>
                <p>@ <a href="https://www.samfundet.no/">Studentersamfundet</a><br/>with 200 students</p>
            </li>
        </ul>
        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <p>
                    The format will be presentations from 1200 to 1800 and mingling and networking with 
                    food and drinks after 1800. We plan to have 4 or 5 presentations at each location.
                </p>
            </div>
        </div>
        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <h2 className='textblock__title'>Signup</h2>
                <p>
                    <a href="https://twitter.com/JavaZone" className="page__link">stay tuned</a> for information on how to sign up for JavaZone Academy.
                </p>
            </div>
        </div>

    </div>
);
