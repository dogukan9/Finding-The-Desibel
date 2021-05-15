import {
  HEARED,
  UNHEARED,
  CHANGE_SOUND,
  CHANGE_SOUND_TO_ZERO,
  INFOS,
  RESET_VALUES,
  RIGHTEAR,
  LEFTEAR,
  LEFTSCORES,
  RIGHTSCORES,
} from '../action/action';
const initialState = {
  desibels: [
    { desibel: 50 },
    { desibel: 50 },
    { desibel: 50 },
    { desibel: 50 },
    { desibel: 50 },
    { desibel: 50 },
  ],

  soundIndex: 0,
  name: '',
  surname: '',
  birthdate: '',
  gender: '',
  phoneNumber: '',
  leftEar: false,
  rightEar: false,
  leftScores: [],
  rightScores: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'bos':
      return {
        ...state,
      };
    case RESET_VALUES:
      return {
        ...state,
        desibels: [
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
        ],

        soundIndex: 0,
      };

    case LEFTSCORES:
      console.log(state.desibels);
      return {
        ...state,
        leftScores: state.desibels,
      };

    case RIGHTSCORES:
      console.log(state.desibels);
      return {
        ...state,
        rightScores: state.desibels,
      };
    case HEARED:
      const downDesibels = [...state.desibels];
      // console.log(downDesibels);
      const downDesibel = downDesibels[state.soundIndex].desibel - 10;
      //   console.log(downDesibel);
      downDesibels[state.soundIndex].desibel = downDesibel;
      return {
        ...state,
        desibels: downDesibels,
      };

    case UNHEARED:
      const upDesibels = [...state.desibels];
      const upDesibel = upDesibels[state.soundIndex].desibel + 5;
      upDesibels[state.soundIndex].desibel = upDesibel;
      return {
        ...state,
        desibels: upDesibels,
      };

    case CHANGE_SOUND:
      const index = state.soundIndex + 1;
      console.log(index);
      return {
        ...state,
        soundIndex: index,
      };

    case CHANGE_SOUND_TO_ZERO:
      return {
        ...state,
        soundIndex: -1,
      };
    case INFOS: {
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        birthdate: action.birthdate,
        gender: action.gender,
        phoneNumber: action.phoneNumber,
      };
    }
    case LEFTEAR:
      return {
        ...state,
        leftEar: true,
      };
    case RIGHTEAR:
      return {
        ...state,
        rightEar: true,
      };
    default:
      return state;
  }
}
