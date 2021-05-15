export const HEARED = "HEARED";
export const UNHEARED = "UNHEARED";
export const CHANGE_SOUND = "CHANGE_SOUND";
export const CHANGE_SOUND_TO_ZERO = "CHANGE_SOUND_TO_ZERO";
export const INFOS = "INFOS";
export const RESET_VALUES = "RESET_VALUES";
export const LEFTEAR = "LEFTEAR";
export const RIGHTEAR = "RIGHTEAR";
export const RIGHTSCORES = "RIGHTSCORES";
export const LEFTSCORES = "LEFTSCORES";
export const GETDATA = "GETDATA";
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
  console.log("reset");
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
    console.log(name,surname,gender,birthdate,phoneNumber,leftScores,rightScores);
    const response = await fetch(
      `https://master-theisis-app-92c1c-default-rtdb.firebaseio.com/users.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          gender,
          birthdate,
          phoneNumber,
          leftScores,
          rightScores,
        }),
      }
    );
    const data = await response.json();
    dispatch({
      type: GETDATA,
      name: data.name,
      surname: data.surname,
      gender: data.gender,
      birthdate: data.birthdate,
      phoneNumber: data.phoneNumber,
      leftScores: data.leftScores,
      rightScores: data.rightScores,
    });
  };
};
export const leftEar = () => {
  return { type: LEFTEAR };
};
export const rightEar = () => {
  return { type: RIGHTEAR };
};
