const initialState = {
    page: window.location.pathname
};

export function routes(state = initialState, action) {
    switch (action.type) {
    case 'ROUTER_NAVIGATE':
        return Object.assign({}, state, { page : action.value });
    default:
        return state;
    }
};
