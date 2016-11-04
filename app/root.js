import { connect } from 'react-redux';
import index from './pages/index';
import videos from './pages/videos';
import notFound from './pages/404.js';
import pageview from './analytics';

const routes = {
    '/': index,
    '/videos': videos
};

function getPage(requestedPage) {
    const page = routes[requestedPage];
    if (!page) {
        pageview('/404');
        return notFound;
    }

    pageview(requestedPage);
    return page;
}

const mapStateToProps = (state) => (
    {
        page: state.routes.page
    }
);

const root = ({ page }) => {
    const Page = getPage(page);
    console.log(page);
    return <Page></Page>;
};

export default connect(mapStateToProps)(root);
