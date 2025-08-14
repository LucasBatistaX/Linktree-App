import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#EDEDED',
    justifyContent:'center'
  },
  img:{
    resizeMode:'cover',
    width:100,
    height:100,
    margin:10
  }
});