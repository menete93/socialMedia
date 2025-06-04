import { StyleSheet } from 'react-native';

const style = StyleSheet.create({


view:{
      flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          width: '100%',


},
image:{
flexDirection: 'row',
 alignItems: 'center',
 padding:25,
},
userPostContainer:{
marginTop:20,
},
  text:{
     marginLeft: 10,
  },
username:{
  color:'#000',
  fontFamily:'Inter_18pt-SemiBold',
  fontSize:16,
},
location:{
    color:'#79869F',
  fontFamily:'Inter_16pt-SemiBold',
  fontSize:12,
},
});

export default style;
