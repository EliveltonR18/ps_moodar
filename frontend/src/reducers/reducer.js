const initialState = {
    felling: [],
    selectedFelling: null,
    error: null,
}

export default function fellings(state = [], action){
    switch(action.type){
        case 'ADD_FELLING':
            return [...state, {stress: action.payload.stress, 
                date: action.payload.date, 
                commenter: action.payload.commenter}
            ];
        case 'SET_SELECTED_FELLING':
            return {...state, 
                selectedFelling:action.payload
            };
        default:
            return state;
    }
}