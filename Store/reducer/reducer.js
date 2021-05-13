import {
  HEARED,
  UNHEARED,
  CHANGE_SOUND,
  CHANGE_SOUND_TO_ZERO,
  INFOS,
  RESET_VALUES,
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
  scores: [
    { score: 0 },
    { score: 0 },
    { score: 0 },
    { score: 0 },
    { score: 0 },
    { score: 0 },
  ],
  soundIndex: 0,
  name: '',
  surname: '',
  age: '',
  gender: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_VALUES: {
      return {
        ...states,
        desibels: [
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
          { desibel: 50 },
        ],
        scores: [
          { score: 0 },
          { score: 0 },
          { score: 0 },
          { score: 0 },
          { score: 0 },
          { score: 0 },
        ],
        soundIndex: 0,
      };
    }

    case HEARED:
      const downDesibels = [...state.desibels];
      const downDesibel = downDesibels[soundIndex].desibel - 10;
      downDesibels[soundIndex] = downDesibel;
      return {
        ...state,
        desibels: downDesibels,
      };

    case UNHEARED:
      const upDesibels = [...state.desibels];
      const upDesibel = upDesibels[soundIndex].desibel + 5;
      upDesibels[soundIndex] = upDesibel;
      return {
        ...state,
        desibels: upDesibels,
      };

    case CHANGE_SOUND:
      return {
        ...state,
        soundIndex: state.soundIndex + 1,
      };

    case CHANGE_SOUND_TO_ZERO:
      return {
        ...state,
        soundIndex: 0,
      };
    case INFOS: {
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        age: action.age,
        gender: action.gender,
      };
    }
    default:
      return state;
  }
}
