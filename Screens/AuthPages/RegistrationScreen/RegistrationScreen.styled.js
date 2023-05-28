import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatarWrapper: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',

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
    transform: [{ rotate: '45deg' }],
  },
  btnAddAvatarText: {
    color: '#ff6c00',
  },
  btnAddAvatarTextActive: {
    color: '#e8e8e8',
  },
});

export const { avatarWrapper, avatar, btnAddAvatar, btnAddAvatarText, btnAddAvatarTextActive } =
  styles;
