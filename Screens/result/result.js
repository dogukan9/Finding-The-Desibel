import React from "react";
import { View, Text, Animated, Dimensions, ScrollView } from "react-native";
import { LineChart,BarChart } from "react-native-chart-kit";
import { style } from "./style";
import CToolBar from "../../Components/CToolBar";
import { Table, Row, Rows } from "react-native-table-component";

import { useSelector, useDispatch } from "react-redux";
let rD = [];
let lD = [];
let rightAverage=0;
let leftAverage=0
const ResultScreen = (props) => {
  const minValue =0;

function* yLabel() {
  yield* [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
}
const yLabelIterator = yLabel();

  let leftEar = useSelector((state) => state.reducer.leftScores);
  let rightEar = useSelector((state) => state.reducer.rightScores);


  
 let r1=rightEar[5].desibel;
 let r2=rightEar[4].desibel;
 let r3=rightEar[0].desibel;
 let r4=rightEar[1].desibel;
 let r5=rightEar[2].desibel;
 let r6=rightEar[3].desibel;

 let l1=leftEar[5].desibel;
 let l2=leftEar[4].desibel;
 let l3=leftEar[0].desibel;
 let l4=leftEar[1].desibel;
 let l5=leftEar[2].desibel;
 let l6=leftEar[3].desibel;
  rightAverage=(rightEar[4].desibel+rightEar[0].desibel+rightEar[1].desibel+rightEar[2].desibel)/4;
  leftAverage=(leftEar[4].desibel+leftEar[0].desibel+leftEar[1].desibel+leftEar[2].desibel)/4;

  const wHeight = Dimensions.get("window").width;
  const H_MAX_HEIGHT = wHeight * 0.36;
  const H_MIN_HEIGHT = wHeight * 0.24;
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["250Hz", "500Hz", "1000Hz", "2000Hz", "4000Hz", "8000Hz"],
    datasets: [
      {
      // data: [rightEar[5].desibel,rightEar[4].desibel,rightEar[0].desibel,rightEar[1].desibel,rightEar[2].desibel,rightEar[3].desibel],
        data:[r1,r2,r3,r4,r5,r6],
        color: () => "#2196F3",
      },
      {
     //data: [lD[5], lD[4], lD[0], lD[1], lD[2], lD[3]],
     data:[l1,l2,l3,l4,l5,l6],

   // data: [leftEar[5].desibel,leftEar[4].desibel,leftEar[0].desibel,leftEar[1].desibel,leftEar[2].desibel,leftEar[3].desibel],

        color: () => "red",
      },
      {
        //data: [lD[5], lD[4], lD[0], lD[1], lD[2], lD[3]],
        data:[90],
   
      // data: [leftEar[5].desibel,leftEar[4].desibel,leftEar[0].desibel,leftEar[1].desibel,leftEar[2].desibel,leftEar[3].desibel],
   
           color: () => "white",
         },
    ],
  };

  const tableHeader = ["~fHZ", "250", "500", "1000", "2000", "4000", "8000"];
  const tableDatas = [
    [
      "Sağ kulak",
      rightEar[5].desibel + "db",
      rightEar[4].desibel+ "db",
      rightEar[0].desibel+ "db",
      rightEar[1].desibel + "db",
      rightEar[2].desibel + "db",
      rightEar[3].desibel + "db"
      
    
    ],
    [
      "Sol kulak",
     leftEar[5].desibel + "db",
      leftEar[4].desibel+ "db",
      leftEar[0].desibel+ "db",
      leftEar[1].desibel + "db",
      leftEar[2].desibel + "db",
      leftEar[3].desibel + "db"
  
      
    ],
  ];
  return (
    <View style={{ alignItems: "center", height: "100%" }}>
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolBar title="SONUÇ EKRANI" onBackPress={props.navigation.goBack} />
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
          yAxisLabel="db"
          height={400}
          segments={18}
          fromZero={true}
      
          chartConfig={{
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            color: (opacity = 1) => `rgba(2, 169, 244, ${opacity})`,
            formatYLabel:()=>yLabelIterator.next().value,
            data:data.datasets,
            propsForDots: {
              r: '3',
              strokeWidth: '1',
              stroke: 'white',
              
             
            },
          }}
          formatYLabel={()=>yLabelIterator.next().value}
        
          backgroundColor="transparent"
          paddingLeft="15"
        />
        <View style={{ margin: "2%" }}></View>
        <View style={{padding:"5%"}}>
          <Text style={{fontSize:20,alignItems:"center",color:"black",fontWeight:"bold",textAlign:"center",marginBottom:10,marginRight:5}}>Saf ses odyometri testi kulak ortalamları</Text>
          <View style={{flexDirection:"row",justifyContent:"space-around",alignContent:"center"}}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Sağ kulak ortalaması :</Text>
            <Text style={{fontSize:16,fontWeight:"bold"}}>{rightAverage}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-around",alignContent:"center"}}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Sol kulak ortalaması :</Text>
            <Text style={{fontSize:16,fontWeight:"bold"}}>{leftAverage}</Text>
          </View>
        </View>

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
