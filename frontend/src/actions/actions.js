export function addFelling(stress, date, commenter){
    return{
        type: 'ADD_FELLING',
        payload: {
            stress,
            date,
            commenter,
        }
    }
}

export const setSelectedFelling = felling => ({
    type: 'SET_SELECTED_FELLING',
    payload: felling,
});