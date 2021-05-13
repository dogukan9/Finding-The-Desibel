import React from "react";
import { StyleSheet, TextInput } from "react-native";

const CTextInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.phone!==undefined?"phone-pad":"name-phone-pad"}
    ></TextInput>
  );
};

const styles=StyleSheet.create({
    input:{
        margin: "5%",
        width: "80%",
        height: 40,
        borderRadius: 10,
        zIndex: 2,
        backgroundColor: '#FAFAFA',
        textAlign: "center",
        shadowColor: "#000",
        fontWeight:"bold",
        shadowOffset: {
        width: 2,
        height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.46,
        elevation: 9,
    }
});
export default CTextInput;
