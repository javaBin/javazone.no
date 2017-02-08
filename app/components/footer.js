import grid from '../assets/grid.svg';

export default () => (
    <div className='footer__content'>
        <div className='footer__text'>
            <ul className='footer__social'>
                <li className='footer__social-item'>
                    <a href='https://twitter.com/javazone' className='footer__twitter'>
                        <span className='icon-social-twitter'></span>
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a href='https://www.facebook.com/JavaZoneConference' className="footer__facebook">
                        <span className='icon-social-facebook'></span>
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a href='mailto:javazone@java.no' className='footer__contact'>
                        <span className='icon-envelope'></span>
                    </a>
                </li>
            </ul>
            <div className="footer__made-by">
                Made by <a href="http://java.no" className="page__link">javaBin</a>
            </div>
        </div>
        <img src={grid} className='footer__grid'/>
    </div>
);
