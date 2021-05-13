import {StyleSheet} from "react-native";

export const style=StyleSheet.create({
    card:{
        margin: "15%",
        width: "70%",
        height: 350,
        borderRadius: 10,
        zIndex: 2,
        backgroundColor: '#2196F3',
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
    },
    title:{
     fontSize:19,
     margin:"4%",
     fontWeight:"400",
     color:"white"
     
    },
    cardText:{
        fontSize:15,
        margin:"4%",
        fontWeight:"bold",
        color:"white"   
    },
    nextPageButton:{
    marginLeft: "25%",
    marginVertical: "6%",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    overflow: "hidden",
    shadowOpacity: 0.56,
    shadowRadius: 5.46,
    elevation: 25,
    },
    buttonText:{
        color:"#2196F3",
        fontSize:18,
        padding:15
    }
    
})