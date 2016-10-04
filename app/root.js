import { getPage } from './routes';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
    {
        page: state.routes.page
    }
);

const root = ({ page }) => {
    const Page = getPage(page);
    return <Page></Page>;
};

export default connect(mapStateToProps)(root);
