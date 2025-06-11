import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 25,
  },
  userPostContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#EFF2F6',
  },
  text: {
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: 'Inter_16pt-SemiBold',
    fontSize: 12,
  },
  userpostState: {
    flexDirection: 'row',
    padding: 10,
  },
  userLike: {
    marginLeft: 1,
    color: '#79869F',
  },
  comments: {
    marginLeft: 1,
    color: '#79869F',
  },
  icon: {
    size: 20,
    color: '#79869F',
  },
});

export default style;
