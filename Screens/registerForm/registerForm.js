import React from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import CToolbar from "../../Components/CToolBar";
const wHeight = Dimensions.get("window").width;
const H_MAX_HEIGHT = wHeight * 0.36;
const H_MIN_HEIGHT = wHeight * 0.24;
const RegisterFormScreen = (props) => {
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  return (
    <View style={{ alignItems: "center", height: "100%" }}>
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolbar
          title="Finansal Raporlama"
          onBackPress={props.navigation.goBack}
        />
      </Animated.View>
    </View>
  );
};

export default RegisterFormScreen;
