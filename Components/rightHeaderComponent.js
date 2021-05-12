import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const RightHeaderComponent = (props) => {


  return (
    <View style={[{ flexDirection: "row", justifyContent: "space-around" }, props.style]}>
      <Text style={{ fontWeight: "bold", padding: 5, color: '#fff' }}>{props.username}</Text>
      <TouchableOpacity onPress={()=>{
          signOut();
      }}>
        <Ionicons style={{ marginRight: 10, color: '#fff', marginTop: 4 }} name="person" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RightHeaderComponent;