import {ADDDATA,ADDTOFIREBASE} from "../action/database";
import firebase from "../../firebase/config";
const initialState={
    name:"",
    surname:"",
    sex:"",
    birthyear:"",
    phoneNumber:""
}

export default  (state=initialState,action)=>{
    switch(action.type){
        case ADDDATA :
            return {
                ...state,
                name:action.name,
                surname:action.surname,
                sex:action.sex,
                birthyear:action.birthyear,
                phoneNumber:action.phoneNumber
            }
        case ADDTOFIREBASE:
            return{
                ...state,
                name:state.name,
                surname:state.surname,
                sex:state.sex,
                birthyear:state.birthyear,
                phoneNumber:state.phoneNumber
            }
    }
}