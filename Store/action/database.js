export const SAVELEFT = 'SAVELEFT';
export const SAVERIGHT = 'SAVERIGHT';
export const ADDTOFIREBASE = 'ADDTOFIREBASE';
export const INFOS = ' INFOS';
export const Infos = (name, surname, gender, birthdate, phoneNumber) => {
  return {
    type: INFOS,
    name: name,
    surname: surname,
    gender: gender,
    birthdate: birthdate,
    phoneNumber: phoneNumber,
  };
};
