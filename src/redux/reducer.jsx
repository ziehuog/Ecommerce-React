import { chooseCategory } from "./constants";

const rootReducer = (state, action) =>{
    switch(action.type){
        case chooseCategory:
            return {
                ...state,
                category: action.paylpad

            }
        default:
            return state;
    }
}

export default rootReducer