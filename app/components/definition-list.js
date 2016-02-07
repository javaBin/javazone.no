export const Dl = (props) => (
    <dl className='definition-list'>
        {props.children}
    </dl>
);

export const Dt = (props) => (
    <dt className='definition-list__term'>{props.children}</dt>
);

export const Dd = (props) => (
    <dd className='definition-list__data'>{props.children}</dd>
);
