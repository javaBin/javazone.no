const initialState = {
    gameVisible: false
};

export function game(state = initialState, action) {
    switch (action.type) {
    case 'GAME_VISIBLE':
        return Object.assign({}, state, { gameVisible : true });
    default:
        return state;
    }
};
