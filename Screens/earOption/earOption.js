import React, { useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
} from "react-native";
import CToolbar from "../../Components/CToolBar";
import { style } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { resetValues, leftEar, rightEar } from "../../Store/action/action";

const EarOptionScreen = (props) => {
  const dispatch = useDispatch();
  let left = useSelector((state) => state.reducer.leftEar);
  let right = useSelector((state) => state.reducer.rightEar);
  useEffect(() => {
    dispatch(resetValues());
  }, []);
  const [leftEarr, setLeftEar] = React.useState(false);
  const [rightEarr, setRightEar] = React.useState(false);
  const [displayIt1, setDisplayIt1] = React.useState(false);
  const [displayIt2, setDisplayIt2] = React.useState(false);

  const wHeight = Dimensions.get("window").width;
  const H_MAX_HEIGHT = wHeight * 0.36;
  const H_MIN_HEIGHT = wHeight * 0.24;
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolbar
          title='SAĞ VEL SOL KULAK TESİ'
          onBackPress={props.navigation.goBack}
        />
      </Animated.View>
      <View style={style.container}>
        {!leftEarr ? (
          <TouchableOpacity
            style={style.buton}
            onPress={() => {
              setLeftEar(true);
              //  dispatch(leftEar());
              setTimeout(()=>{
               setDisplayIt1(true);
              },3000);
              props.navigation.navigate("listen", {
                leftEar: true,
                rightEar: false,
              });
            }}
          >
            <Text style={style.text}>SOL KULAK</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ marginLeft:5, backgroundColor: "#29B6F6",padding:7,borderRadius:15 }}>
            { displayIt1 && <Text
              style={{
                fontSize: 15,
                color: "white",
              }}
            >
              SOL KULAK TESTİ BİTTİ
            </Text>}
          </View>
        )}
        {!rightEarr ? (
          <TouchableOpacity
            style={style.buton}
            onPress={() => {
              setRightEar(true);
              // dispatch(rightEar());
              setTimeout(()=>{
                setDisplayIt2(true);
              },3000);
              props.navigation.navigate("listen", {
                rightEar: true,
                leftEar: false,
              });
            }}
          >
            <Text style={style.text}>SAĞ KULAK</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ marginLeft:5, backgroundColor: "#29B6F6",padding:7,borderRadius:15 }}>
            {  displayIt2 &&
                  <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  SAĞ KULAK TESTİ BİTTİ
                </Text>
            }
          </View>
         
        )}
      </View>
    </View>
  );
};

export default EarOptionScreen;
