const initialState = {
    visible: false
};

export function menu(state = initialState, action) {
    switch (action.type) {
    case 'MENU_TOGGLE':
        return Object.assign({}, state, { visible : !state.visible });
    default:
        return state;
    }
};
