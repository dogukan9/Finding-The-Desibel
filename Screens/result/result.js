import React from "react";
import { View, Text, Animated, Dimensions,ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { style } from "./style";
import CToolBar from "../../Components/CToolBar";
import {
  Table,
  Row,
  Rows,
} from "react-native-table-component";

import { useSelector, useDispatch } from 'react-redux';
let rD=[];
let lD=[];
const ResultScreen = (props) => {
  let leftEar = useSelector((state) => state.reducer.leftScores);
  let rightEar = useSelector((state) => state.reducer.rightScores);

  
    leftEar.map(r=>{
      lD.push(r.desibel);
    })
    rightEar.map(r=>{
      rD.push(r.desibel);
    })
  
  const wHeight = Dimensions.get("window").width;
  const H_MAX_HEIGHT = wHeight * 0.36;
  const H_MIN_HEIGHT = wHeight * 0.24;
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(2, 169, 244, ${opacity})`,
  };
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["1000Hz", "2000Hz", "4000Hz", "8000Hz","500Hz", "250Hz",],
    datasets: [
      {
        data: [rD[0],rD[1],rD[2],rD[3],rD[4],rD[5]],
        color: () => "#2196F3",
      },
      {
        data: [lD[0],lD[1],lD[2],lD[3],lD[4],lD[5]],
        color: () => "#ED7C33",
      },
    ],
  };

  const tableHeader = ["~fHZ", "1000", "2000", "4000", "8000","500", "250"];
  const tableDatas = [
    ["Sağ kulak",rD[0],rD[1],rD[2],rD[3],rD[4],rD[5]],
    ["Sol kulak", lD[0],lD[1],lD[2],lD[3],lD[4],lD[5]],
  ];
  return (
    <View style={{ alignItems: "center", height: "100%" }}>
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolBar title="Sonuç Ekranı" onBackPress={props.navigation.goBack} />
      </Animated.View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 23, fontWeight: "bold" }}>
          İşitme testi sonuçlarınız
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 3,
            marginBottom: 15,
          }}
        >
          <Text style={{ color: "#2196F3", fontSize: 18, fontWeight: "bold" }}>
            Sağ Kulak
          </Text>
          <Text style={{ color: "#ED7C33", fontSize: 18, fontWeight: "bold" }}>
            Sol Kulak
          </Text>
        </View>

        <LineChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        <View style={{ margin: "2%" }}></View>

        <Table style={style.table}>
          <Row
            data={tableHeader}
            style={style.HeadStyle}
            textStyle={style.headStyle}
          ></Row>
          <Rows
            data={tableDatas}
            style={style.TableText}
            textStyle={style.rowStyle}
          ></Rows>
        </Table>
      </ScrollView>
    </View>
  );
};

export default ResultScreen;
