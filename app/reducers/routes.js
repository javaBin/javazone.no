export function routes(location) {
    const initialState = {
        page: location.pathname
    };

    return function(state = initialState, action) {
        switch (action.type) {
        case 'ROUTER_NAVIGATE':
            return Object.assign({}, state, { page : action.value });
        default:
            return state;
        }
    };
}
