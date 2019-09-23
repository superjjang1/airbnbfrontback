export default (state =[],action)=>{
    if(action.type==='signup'){
        console.log(action.payload.data);
        return action.payload.data
    }
    return state;
}