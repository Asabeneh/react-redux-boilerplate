const  productsReducer = (state = [],  {type,payload})  => {
    switch(type){
        case 'CHANGE_STATE':
            return payload.newState;
        default:
            return state;
    }

}

export default productsReducer;