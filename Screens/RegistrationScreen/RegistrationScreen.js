import { View, ImageBackground, Image, Pressable, TextInput, Text, Linking } from 'react-native';
import { StyleSheet } from 'react-native';

import backgroundImg from '../../assets/img/background.jpg';
// import { btn } from './RegistrationScreen.styled';

const RegistrationScreen = () => {
  return (
    <ImageBackground source={backgroundImg} style={styles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} />
          <Pressable style={styles.btnAddAvatar}>
            <Text style={styles.btnAddAvatarText}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput style={styles.input} placeholder="Логін" />
        <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
        <View>
          <TextInput style={styles.input} placeholder="Пароль" />
          <Pressable style={styles.btnPassShow}>
            <Text style={styles.btnPassShowText}>Показати</Text>
          </Pressable>
        </View>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Зареєструватися</Text>
        </Pressable>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  container: {
    paddingHorizontal: 16,

    width: '100%',
    height: '67.61%',

    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarWrapper: {
    position: 'absolute',
    top: -60,
    right: 128,

    width: 120,
    height: 120,

    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  btnAddAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,

    alignItems: 'center',
    alignContent: 'center',

    width: 25,
    height: 25,

    color: '#ff6c00',
    backgroundColor: '#ffffff',

    borderWidth: 1,
    borderColor: '#ff6c00',
    borderRadius: 50,
  },
  btnAddAvatarText: {
    color: '#ff6c00',
  },

  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',

    marginTop: 92,
    marginBottom: 32,
    color: '#212121',
  },
  input: {
    fontSize: 16,
    padding: 16,
    marginBottom: 16,

    color: '#bdbdbd',
    backgroundColor: '#f6f6f6',

    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8,
  },
  btnPassShow: {
    position: 'absolute',
    right: 0,
    top: 0,

    padding: 16,

    backgroundColor: 'transparent',
  },
  btnPassShowText: {
    color: '#1B4371',
  },

  btn: {
    alignItems: 'center',

    padding: 16,
    marginTop: 43,

    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  btnText: {
    color: '#ffffff',
  },

  link: {
    alignItems: 'center',

    marginTop: 16,
  },
  linkText: {
    color: '#1B4371',
  },
});

export default RegistrationScreen;
