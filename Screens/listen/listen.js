import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { style } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import CToolbar from '../../Components/CToolBar';
import { Audio } from 'expo-av';
import { useSelector } from 'react-redux';
import { SOUNDS } from '../../Data/data';
const ListenScreen = (props) => {
  const wHeight = Dimensions.get('window').width;
  const H_MAX_HEIGHT = wHeight * 0.36;
  const H_MIN_HEIGHT = wHeight * 0.24;
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  let sound;
  const soundIndex = useSelector((state) => state.reducer.soundIndex);
  const soundDesibel = useSelector(
    (state) => state.reducer.desibels[soundIndex].desibel
  );
  const convert_desibel_to_volumeFloat = (volume) => {
    const x =
      volume != 100 ? 1 - Math.log(100 - volume) / Math.log(100.0) : 1065353216;

    return x;
  };

  async function playSound() {
    const y = convert_desibel_to_volumeFloat(soundDesibel);
    sound = await Audio.Sound.createAsync(SOUNDS[soundIndex].ses, {
      shouldPlay: true,
      volume: y,
    });

    setTimeout(() => {
      sound.sound.unloadAsync();

      props.navigation.navigate({
        routeName: 'question',
      });
    }, sound.status.durationMillis);
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2196F3',
      }}
    >
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolbar
          title='Dinleme Ekranı'
          onBackPress={props.navigation.goBack}
        />
      </Animated.View>

      <View style={style.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(153, 179,255,1)', 'transparent']}
          style={style.background}
        />

        <LinearGradient
          // Button Linear Gradient
          colors={['#fff', '#fff', '#fff']}
          style={style.button}
        >
          <TouchableOpacity
            style={style.radius}
            onPress={() => {
              playSound();
            }}
          >
            <Text style={style.text}>Dinlemek için tıklayın</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ListenScreen;
