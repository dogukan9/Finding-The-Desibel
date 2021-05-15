import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import CToolbar from '../../Components/CToolBar';
import { style } from './style';
import { useSelector, useDispatch } from 'react-redux';
import {
  heared,
  unheared,
  hearedRight,
  unhearedRight,
} from '../../Store/action/action';
import { changeSound } from '../../Store/action/action';

let unclear = 0;
const QuestionScreen = (props) => {
  const dispatch = useDispatch();
  const wHeight = Dimensions.get('window').width;
  const H_MAX_HEIGHT = wHeight * 0.36;
  const H_MIN_HEIGHT = wHeight * 0.24;
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolbar title='Answer Screen' onBackPress={props.navigation.goBack} />
      </Animated.View>
      <View style={style.container}>
        <TouchableOpacity
          style={style.buton}
          onPress={() => {
            if (unclear == 0) {
              dispatch(heared());
            }

            if (unclear !== 0) {
              unclear = 0;
              dispatch(changeSound());
            }
            props.navigation.navigate('listen');
          }}
        >
          <Text style={style.text}>DUYDUM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.buton}
          onPress={() => {
            dispatch(unheared());
            unclear = unclear + 1;
            console.log('unclear=' + unclear);

            props.navigation.navigate('listen');
          }}
        >
          <Text style={style.text}>DUYMADIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionScreen;
