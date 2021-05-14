export const HEARED = 'HEARED';
export const UNHEARED = 'UNHEARED';
export const CHANGE_SOUND = 'CHANGE_SOUND';
export const CHANGE_SOUND_TO_ZERO = 'CHANGE_SOUND_TO_ZERO';
export const INFOS = 'INFOS';
export const RESET_VALUES = 'RESET_VALUES';
export const LEFTEAR = 'LEFTEAR';
export const RIGHTEAR = 'RIGHTEAR';
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

export const giveInfos = (name, surname, date, gender, phone) => {
  return {
    type: INFOS,
    name: name,
    surname: surname,
    date: date,
    gender: gender,
    phone: phone,
  };
};

export const resetValues = () => {
  console.log('reset');
  return { type: RESET_VALUES };
};

export const saveLeft = () => {
  return { type: RESET_VALUES };
};
export const saveRight = () => {
  return { type: RESET_VALUES };
};

export const leftEar = () => {
  return { type: LEFTEAR };
};
export const rightEar = () => {
  return { type: RIGHTEAR };
};
