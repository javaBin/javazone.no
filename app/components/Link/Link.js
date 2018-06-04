import * as React from 'react';
import { connect } from 'react-redux';

type LinkProps = {
    href: string,
    children: React.Node,
    className: string,
    navigate: Function
}

function Link(props: LinkProps) {

    let onLinkClick = (event): void => {
        props.navigate(event);
    }

    return(
        <a href={props.href} className={props.className} onClick={onLinkClick}>{props.children}</a>
    )
}

function isModifiedEvent(event: any) {
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function mapDispatchToProps(dispatch) {
    return {
        navigate(event) {
            if (isModifiedEvent(event) || (event.attributes && event.attributes.target )) {
                return;
            }
            let el = event.target;
            while (el.tagName !== 'A') {
                el = el.parentElement;
            }
            const url = el.getAttribute('href');
            if (!url) {
                return;
            }

            window.history.pushState(null, null, url);
            window.scroll(0, 0);
            event.preventDefault();
            dispatch({
                type: 'ROUTER_NAVIGATE',
                value: url
            });
        }
    }
}

export default connect(state => state, mapDispatchToProps)(Link);