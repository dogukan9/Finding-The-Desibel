import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";

const CToolBar=(props)=>{
    return(
        <View style={styles.container} >
        <LinearGradient style={styles.bar} colors={['#29B6F6', '#03A9F4', '#0288D1']} start={{ x: 0.6, y: 0 }}>
            <View style={{ transform: [{ scaleX: 1 / 2 }], flexDirection: 'row', width: '100%', alignItems: "center", marginTop: '8%' }}>
                
                <TouchableOpacity onPress={props.onBackPress} style={{width: '10%'}}>
                { props.onBackPress && <Ionicons style={{ color: '#fff' }} name="chevron-back-circle" size={36} />}
                </TouchableOpacity>
                
                <Text style={styles.title} >{props.title}</Text>
            </View>


        </LinearGradient>
    </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderBottomRightRadius: 280,
        borderBottomLeftRadius: 280,
        overflow: 'hidden',
        transform: [{ scaleX: 2 }],
        justifyContent: "center",
        alignItems: "center",
    },
    bar: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: '80%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',

    }
})
export default CToolBar;