import {StyleSheet} from "react-native";

export const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2196F3"
    },
    image:{
         alignSelf:"center",
         marginTop:"20%",
         borderRadius:100
    },
    title:{
         textAlign:"center",
         marginVertical:10,
         fontSize:35,
         color:"white",
         fontWeight:"bold"
    },
    text:{
        textAlign:"center",
         marginVertical:10,
         fontSize:25,
         color:"white",
         fontWeight:"bold"
    },
    startButton:{
        marginHorizontal:"24%",
        marginVertical:"5%",
        width: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "white",
        color: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    buttonText:{
        textAlign:"center",
        marginVertical:10,
        fontSize:27,
        color:"#2196F3",
        fontWeight:"bold"
    }
})