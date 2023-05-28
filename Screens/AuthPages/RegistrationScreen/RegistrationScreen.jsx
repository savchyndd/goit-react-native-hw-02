import { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  container,
  bgContainer,
  keyboardView,
  contentWrapper,
  title,
  input,
  inputLast,
  passWrapper,
  btnPassShow,
  btnPassShowText,
  btn,
  btnText,
  link,
  linkText,
  linkTextUnderline,
} from '../AuthPagesStyles';
import {
  avatarWrapper,
  avatar,
  btnAddAvatar,
  btnAddAvatarText,
  btnAddAvatarTextActive,
} from './RegistrationScreen.styled';
import backgroundImg from '../../assets/img/background.jpg';
import addSvg from '../../assets/img/add.svg';

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isAvatar, setAvatar] = useState(true);

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={container}>
        <ImageBackground source={backgroundImg} style={bgContainer}>
          <View style={{ ...contentWrapper, height: '67.61%' }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={keyboardView}
            >
              <View style={avatarWrapper}>
                <Image style={avatar} />
                <TouchableOpacity style={btnAddAvatar}>
                  <addSvg />
                  <Image source={addSvg} />
                  {/* <Text style={isAvatar ? btnAddAvatarTextActive : btnAddAvatarText}>+</Text> */}
                </TouchableOpacity>
              </View>
              <Text style={{ ...title, marginTop: 92 }}>Реєстрація</Text>
              <TextInput style={input} placeholder="Логін" onFocus={handleFocus} />
              <TextInput
                style={input}
                placeholder="Адреса електронної пошти"
                onFocus={handleFocus}
              />
              <View style={{ ...passWrapper, marginBottom: isShowKeyboard ? 323 : 43 }}>
                <TextInput
                  style={{ ...input, ...inputLast }}
                  placeholder="Пароль"
                  onFocus={handleFocus}
                />
                <TouchableOpacity style={btnPassShow}>
                  <Text style={btnPassShowText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            {!isShowKeyboard && (
              <View>
                <TouchableOpacity style={btn}>
                  <Text style={btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={link}>
                  <Text style={linkText}>
                    Вже є акаунт? <Text style={linkTextUnderline}>Увійти</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
