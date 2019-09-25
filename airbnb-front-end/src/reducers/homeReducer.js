export default (state = {}, action)=>{
    if(action.type ==='home'){
        return action.payload.data
    }
    return state;
}