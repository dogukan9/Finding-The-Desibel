export const HEARED = 'HEARED';
export const UNHEARED = 'UNHEARED';
export const CHANGE_SOUND = 'CHANGE_SOUND';
export const CHANGE_SOUND_TO_ZERO = 'CHANGE_SOUND_TO_ZERO';
export const INFOS = 'INFOS';
export const RESET_VALUES = 'RESET_VALUES';
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

export const giveInfos = (name, surname, age, gender) => {
  return {
    type: UNHEARED,
    name: name,
    surname: surname,
    age: age,
    gender: gender,
  };
};

export const resetValues = () => {
  return { type: RESET_VALUES };
};
