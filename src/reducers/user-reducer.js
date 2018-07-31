import {UPDATE_USER} from '../actions/user-action'
const userReducer = (state ='', {type, payload}) => {
    switch(type){
        case UPDATE_USER:
            return payload.user
        default:
            return state;
    }
    
}

export default userReducer;

