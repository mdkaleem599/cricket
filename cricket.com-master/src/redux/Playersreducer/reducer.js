// Todo
 import  * as types from "./action.types"
 const initialstate = {
     players : [],
     isLoading : true,
     isError : false,
 }

const playersreducer = (state = initialstate, action)=>{
        const {type, payload} = action;
    switch(type){
          case types.GET_PLAYERS_REQUEST :
           return {...state, isLoading : true, isError : false };
           case types.GET_PLAYERS_SUCCESS :
            console.log("payload");
            return  { ...state, isLoading : false, isError: false, players : payload };
            case types.GET_PLAYERS_FAILURE :
                return { ...state, isLoading : false, isError : true, };
       default :
        return state;  
    } 
}

export default  playersreducer;