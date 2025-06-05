import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  view: {
    flex: 1,
    width: 70,
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 1,
    alignSelf: 'flex-start', // garante que fique à esquerda
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 2,
    padding: 3,
    borderRadius: 50,
  },
});

export default style;
