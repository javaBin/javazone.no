import React from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        navigate(ev) {
            if (isModifiedEvent(ev) || (ev.attributes && ev.attributes.target )) {
                return;
            }
            let el = ev.target;
            while (el.tagName !== 'A') {
                el = el.parentElement;
            }
            const url = el.getAttribute('href');
            if (!url) {
                return;
            }

            window.history.pushState(null, null, url);
            window.scroll(0, 0);
            ev.preventDefault();
            dispatch({
                type: 'ROUTER_NAVIGATE',
                value: url
            });
        }
    };
}

const isModifiedEvent = (event) =>
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

function link({href, children, className, navigate, onClick}) {
    const click = (ev) => {
        navigate(ev);
        if (onClick) {
            setTimeout(() => onClick(ev), 200);
        }
    };
    return <a href={href} className={className} onClick={click}>{children}</a>;
};

export const Link = connect((state) => state, mapDispatchToProps)(link);
