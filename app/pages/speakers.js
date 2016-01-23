import header from '../assets/header_expo.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='page partners'>
        <div className='page__header page__header--centered' style={headerStyle}>
           <h1 className='page__title partners__title'>Call for speakers</h1>
        </div>

        <div className='textblock'>
            <div className='textblock__column textblock__column--centered'>
                <div className='textblock__text'>
                    <h2 className='textblock__title'>Come forward, speakers!</h2>
                    <p>
                        Yada yada
                    </p>
                </div>
            </div>
        </div>
    </div>
);
