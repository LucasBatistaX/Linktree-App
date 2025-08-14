import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  avatar:{
    width:100,
    height:100,
    borderRadius:50,
    marginBottom:10
},
name:{
  fontSize:20,
  fontWeight:'bold',
  marginBottom:5,
},
subtitle:{
  fontSize:12,
  color:'#888',
  textAlign:'center',
  marginBottom:20
},
  buttons:{
    backgroundColor:'#EDEDED',
    borderRadius: 20,
    width:'95%',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  }
})