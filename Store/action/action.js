export const HEARED = 'HEARED';
export const UNHEARED = 'UNHEARED';
export const CHANGE_SOUND = 'CHANGE_SOUND';
export const CHANGE_SOUND_TO_ZERO = 'CHANGE_SOUND_TO_ZERO';
export const INFOS = 'INFOS';
export const RESET_VALUES = 'RESET_VALUES';
export const LEFTEAR = 'LEFTEAR';
export const RIGHTEAR = 'RIGHTEAR';
export const RIGHTSCORES = 'RIGHTSCORES';
export const LEFTSCORES = 'LEFTSCORES';
export const heared = () => {
  return { type: HEARED };
};

export const unheared = () => {
  return { type: UNHEARED };
};

export const changeSound = () => {
  return { type: CHANGE_SOUND };
};

export const changeSoundToZero = () => {
  return { type: CHANGE_SOUND_TO_ZERO };
};

export const infos = (name, surname, sex, date, phone) => {
  return {
    type: INFOS,
    name: name,
    surname: surname,
    birthdate: date,
    gender: sex,
    phoneNumber: phone,
  };
};

export const resetValues = () => {
  console.log('reset');
  return { type: RESET_VALUES };
};

export const saveLeft = () => {
  return (dispatch) => {
    dispatch({ type: LEFTSCORES });

    dispatch(resetValues());
  };
};

export const saveRight = () => {
  return (dispatch) => {
    dispatch({ type: RIGHTSCORES });

    dispatch(resetValues());
  };
};

export const save = () => {
  return async (dispatch, getState) => {
    const name = getState().reducer.name;
    const surname = getState().reducer.surname;
    const gender = getState().reducer.gender;
    const birthdate = getState().reducer.birthdate;
    const phoneNumber = getState().reducer.phoneNumber;
    const leftScores = getState().reducer.leftScores;
    const rightScores = getState().reducer.rightScores;

    console.log(
      'Name' + name,
      'Surname' + surname,
      'Gender' + gender,
      'Birtdate' + birthdate,
      'number' + phoneNumber,
      'left' + leftScores.map((x) => x.desibel),
      'right' + rightScores.map((x) => x.desibel)
    );
    dispatch({ type: 'bos' });
  };
};
export const leftEar = () => {
  return { type: LEFTEAR };
};
export const rightEar = () => {
  return { type: RIGHTEAR };
};
