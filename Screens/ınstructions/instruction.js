import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CToolbar from '../../Components/CToolBar';
import { style } from './style';
const InstructionScreen = (props) => {
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
    <View style={{ alignItems: 'center', height: '100%' }}>
      <Animated.View style={{ height: headerScrollHeight }}>
        <CToolbar title='TALİMATLAR' onBackPress={props.navigation.goBack} />
      </Animated.View>
      <View style={style.card}>
        <View>
          <Text style={style.title}>Talimatlar</Text>
        </View>
       
        <View>
          <Text style={style.cardText}> Sessiz bir alanda olduğunuzdan emin olun</Text>
        </View>
        <View>
          <Text style={style.cardText}>Kulaklığınızı takınız.</Text>
        </View>
        <View>
          <Text style={style.cardText}>Önce sağ kulagınız ile daha sonra sol kulağınız ile dinleyiniz.</Text>
        </View>
        <View>
          <Text style={style.cardText}>Kulağınıza gelecek ses sinyallerini dikkatli bir şekilde dinleyiniz, çok az bile ses duysanız duydum butonuna basın.</Text>
        </View>
        <TouchableOpacity
          style={style.nextPageButton}
          onPress={() => {
            props.navigation.navigate('earOption');
          }}
        >
          <Text style={style.buttonText}>Devam et </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstructionScreen;