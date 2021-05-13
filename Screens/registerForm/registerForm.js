import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CToolbar from '../../Components/CToolBar';
import CTextInput from '../../Components/CTextInput';
import { style } from '../registerForm/style';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
const wHeight = Dimensions.get('window').width;
const H_MAX_HEIGHT = wHeight * 0.36;
const H_MIN_HEIGHT = wHeight * 0.24;
const RegisterFormScreen = (props) => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [sex, setSex] = React.useState('Kadın');
  const [showDate, setShowDate] = React.useState(false);
  const [phone, setPhone] = React.useState('');
  const scrollOffsetY = React.useRef(new Animated.Value(1)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = async () => {
    await showMode('date');
    setShowDate(true);
  };

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
          title='Hasta Kayıt Ekranı'
          onBackPress={props.navigation.goBack}
        />
      </Animated.View>
      <ScrollView>
        <View style={style.formGroup}>
          <Text style={style.label}>Adınız</Text>
          <CTextInput
            placeholder='Adınız'
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View style={style.formGroup}>
          <Text style={style.label}>Soyadınız</Text>
          <CTextInput
            placeholder='Soyadınız'
            value={surname}
            onChangeText={(surname) => setSurname(surname)}
          />
        </View>

        <View style={style.formGroup}>
          <Text style={style.label}>İrtibat Numarası</Text>
          <CTextInput
            phone={true}
            placeholder='telefon numarası giriniz'
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          ></CTextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '2%',
              color: 'white',
            }}
          >
            Kadın
          </Text>
          <RadioButton
            value='Kadın'
            color='white'
            status={sex === 'Kadın' ? 'checked' : 'unchecked'}
            onPress={() => setSex('Kadın')}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '2%',
              color: 'white',
            }}
          >
            Erkek
          </Text>
          <RadioButton
            value='Erkek'
            color='white'
            status={sex === 'Erkek' ? 'checked' : 'unchecked'}
            onPress={() => setSex('Erkek')}
          />
        </View>

        <View>
          <TouchableOpacity
            style={style.dateTimeButton}
            onPress={showDatepicker}
          >
            <Text style={style.buttonText}>Doğum tarihi seçiniz</Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={mode}
              display='default'
              onChange={onChange}
            />
          )}
          {showDate && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: '5%',
              }}
            >
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
              >
                Dogum tarihiniz :{date}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={style.nextPageButton}
          onPress={() => {
            props.navigation.navigate('listen');
          }}
        >
          <Text
            style={style.buttonText}
            onClick={() => {
              props.navigation.navigate('listen');
            }}
          >
            Sonraki sayfa{' '}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RegisterFormScreen;
