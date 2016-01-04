import header from '../assets/header_expo.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='page kids'>
        <div class='page__header page__header-centered' style={headerStyle}>
            <h1 className='page__title'>JavaZone Kids</h1>
        </div>
    </div>
);
