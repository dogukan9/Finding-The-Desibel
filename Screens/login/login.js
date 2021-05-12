import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import { style } from "./style";
const LoginScreen = (props) => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/vectors/ear-vector-icon-hearing-aid-logo-design-graphics-vector-illustrations-vector-id1174550167",
          width: 200,
          height: 200,
        }}
        style={style.image}
      />
      <Text style={style.title}>ODYOLOJİ</Text>
      <Text style={style.text}>SAF SES ODYOMETRİ TESTİ</Text>
      <TouchableOpacity style={style.startButton} onPress={()=>{
          props.navigation.navigate("register");
      }}>
          <Text style={style.buttonText}>Teste başla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
