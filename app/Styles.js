import {StyleSheet} from 'react-native';
module.exports  = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#48234C',
    padding: 10,
    paddingTop: 20
  },
  button: {
    height: 60,
    backgroundColor: '#CF3638',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    alignSelf: 'center'
  },
  logo:{
      alignItems:'center'
  },
  input: {
    height: 60,
    marginTop: 10,
    alignSelf: 'stretch',
    textAlign:'center',
    padding: 10,
    fontSize: 18,
    borderColor: '#FFF',
    borderWidth: 1,
    color:'#FFF'
  },
  heading: {
    fontSize: 20,
    color:'#CF3638',
    fontWeight:'bold'
  },
  footer:{
    alignItems: 'center'
  },
  left:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row'
  },
  right:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row'
  },
  links:{
      flexDirection: 'row',
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:30,
      paddingRight:30
  },
  bar:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row'
  },
  barText:{
      color:'#FFF',
      margin:10,
  },
  back:{
    margin:10,
    alignItems: 'flex-start',
  },
  header:{
    flex:.2
  },
  userView:{
    flex:.3,
    justifyContent:'center',
    alignItems:'center'
  },
  tabImage:{
    flex:.5,
    alignItems:'center'
  },
  headerText:{
    color:'#FFF',
    margin:10
  },
  headerActions:{
    flexDirection: 'row'
  },
  userText:{
    fontSize:30,
    color:'#F8D6A6'
  },
  scrollTab:{
    flex:.3,
    backgroundColor:'#FFF',
    margin:-10,
    padding:10
  },
  personalInput: {
    height: 60,
    marginTop: 10,
    padding: 10,
    fontSize: 18,
    borderColor: 'red',
    borderWidth: 1
  },
  personalText:{
    fontSize:20
  },
  personalContent:{
    marginTop:20,
    marginBottom:20
  },
  reviewHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  reviewTitle:{
    fontSize:25,
    color:"#000",
    textAlign:'center'
  },
  reviewActionView:{
    flexDirection: 'row',
  },
  reviewEdit:{
    fontSize:20,
    color:'#4877AF',
    margin:5,
    textAlign:'center'
  },
  reviewDelete:{
    fontSize:20,
    color:'#4877AF',
    margin:5,
    textAlign:'center'
  },
  wrapText:{
    flexWrap: 'wrap',
    width:250,
    justifyContent:'center'
  },
  reviewContent:{
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  listItem:{
    marginTop:10,
    marginBottom:10
  }

})