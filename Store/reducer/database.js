import { ADDDATA, ADDTOFIREBASE, INFOS } from '../action/database';
import firebase from '../../firebase/config';
const initialState = {
  name: '',
  surname: '',
  gender: '',
  birthdate: '',
  phoneNumber: '',
  scores: [
    { score: 0 },
    { score: 0 },
    { score: 0 },
    { score: 0 },
    { score: 0 },
    { score: 0 },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INFOS: {
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        birthdate: action.birthDate,
        gender: action.gender,
        phoneNumber: action.phoneNumber,
      };
    }
    case ADDDATA:
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        sex: action.sex,
        birthyear: action.birthyear,
        phoneNumber: action.phoneNumber,
      };
    case ADDTOFIREBASE:
      return {
        ...state,
        name: state.name,
        surname: state.surname,
        sex: state.sex,
        birthyear: state.birthyear,
        phoneNumber: state.phoneNumber,
      };
  }
};
