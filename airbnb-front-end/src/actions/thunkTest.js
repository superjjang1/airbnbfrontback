//a test thunk
//what is a thunk?
//a thunk is  a function that wraps an expression, to delay its evaluation
export default()=>{
    return waitASec
}

function waitASec(dispatch, getState){
    console.log("wait a sec is running");
    setTimeout(()=>{
        console.log("2 seconds has passed.")
        dispatch({
            type: "aThunkAction"
        })
    },2000)
}