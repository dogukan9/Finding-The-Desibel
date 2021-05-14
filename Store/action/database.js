export const ADDDATA = "ADDDATA";
export const ADDTOFIREBASE="ADDTOFIREBASE";

export const addToData = (name, surname, sex, birthyear, phoneNumber) => {
  return {
    type: ADDDATA,
    name: name,
    surname: surname,
    sex: sex,
    birthyear: birthyear,
    phoneNumber: phoneNumber,
  };
};


export const addToFirebase=(userData)=>{
    return {type:ADDTOFIREBASE,userData:userData}
}