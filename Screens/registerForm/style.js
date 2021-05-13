import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  formGroup: {
    flexDirection: "column",
    alignContent: "center"
  },
  label: {
    color: "white",
    marginTop: "5%",
    marginHorizontal: "5%",
    fontSize: 20,
    fontWeight: "bold",
  },
  dateTimeButton: {
    marginHorizontal: "20%",
    marginVertical: "3%",
    width: "60%",
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
  buttonText: {
    textAlign: "center",
    marginVertical: 10,
    padding: "3%",
    fontSize: 20,
    color: "#2196F3",
    fontWeight: "bold",
  },
  nextPageButton:{
    marginLeft: "48%",
    marginVertical: "3%",
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
});
