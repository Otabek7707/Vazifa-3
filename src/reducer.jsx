

export const reducer = (state,action) =>{
    if(action.type === "LOADING"){
        return{
            ...state,
            loading:true
        }
    }
    if (action.type ==="FETCH"){
        return{
            ...state,
            list:action.payload
        }
    }
}