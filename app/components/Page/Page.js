//@flow
import * as React from 'react';
import './Page.less';
import Navigation from '../Navigation/Navigation';

type PageProps = {
    name: string,
    children: React.Node
}

function Page(props: PageProps) {
    return (
        <div className="page">
            <Navigation />
            {props.children}
        </div>
    )
}

export default Page;

/*
export const Page = (props) => {
    const pageClass = `page ${props.name}`;

    return (
        <div className={pageClass}>
            <Menu />
            <div className='page__logo-container'>
                <Link href='/'>
                    <img src={logo} className='page__logo' />
                </Link>
            </div>
            {props.children}
            <Container className='footer'>
                <Footer></Footer>
            </Container>
        </div>
    );
};
*/

