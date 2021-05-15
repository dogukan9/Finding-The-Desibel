import { ADDDATA, ADDTOFIREBASE, INFOS ,GETDATA} from '../action/database';
import firebase from '../../firebase/config';
const initialState = {
  name: '',
  surname: '',
  gender: '',
  birthdate: '',
  phoneNumber: '',
  leftScore:[],
  rightScores:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
      case GETDATA:
        return{
          ...state,
          name:action.name,
          surname:action.surname,
          gender:action.gender,
          birthdate:action.birthdate,
          leftScores:action.leftScores,
          rightScores:action.rightScores
        }
  }
};
