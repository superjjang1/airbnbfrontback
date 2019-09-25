  
export default (state = {},action)=>{
    if(action.type === 'signUp'){
        // I care about this aciton!!!
        return action.payload.data
    }else if(action.type ==='logout'){
        return {}
    }else if(action.type ==='login'){
        return action.payload.data
    }else if(action.type ==='aThunkAction'){
        console.log('i just got a thunk action')
    }
    return state;
}