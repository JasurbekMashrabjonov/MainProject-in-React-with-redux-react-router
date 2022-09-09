
const initialState = {

}

function vyorska(state = initialState,{type,payload}) {
 switch (type) {
    case "":
       {
        return{
            ...state,

        }
       }
 
    default:
       return state
 }
}

export default vyorska;