import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    images:{
      width:"100%",
      height:verticalScale(400),
      marginTop:verticalScale(24),
      borderRadius:20
    },
    header:{
      position:'absolute',
      
    }
});
export default styles;