import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgb(51, 102, 255)',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
  radius: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    padding: 10,
  },

  button: {
    backgroundColor: 'white',
    padding: 45,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',

    borderRadius: 70,
  },
  image: {
    borderRadius: 70,

    height: 110,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 25,
    color: 'blue',
    textAlign: 'center',
  },
  bar: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
},
});
