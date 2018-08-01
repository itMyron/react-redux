import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../constants";
import shortid from "shortid";
const flashMessages = ( state =[] , action ={} ) => {
    switch (action.type) {
        case DELETE_FLASH_MESSAGE :
            let indexOf = state.findIndex(item => item.id === action.id ) ;
           
            if(indexOf>=0){
                /* return [
                    ...state.slice(0, indexOf),
                    ...state.slice(indexOf + 1)
                ]  */
                state.splice(indexOf, 1);
               
                return state;
            }
            return state ;
        case ADD_FLASH_MESSAGE :
            return  [
                ...state ,
                {
                    id : shortid.generate(),
                    type : action.message.type ,
                    text : action.message.text 
                }
            ]
        default:
            return state;
    }
}
export default flashMessages ;