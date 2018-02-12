//@flow
import * as React from 'react';
import './Page.less';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

type PageProps = {
    name: string,
    children: React.Node
}

function Page(props: PageProps) {
    return (
        <div className="page">
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default Page;