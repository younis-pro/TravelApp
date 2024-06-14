import { StyleSheet, Dimensions, } from 'react-native';
import { scale, moderateScale, verticalScale, } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        margin: moderateScale(20)
    },
    mainimage: {
        height: height / 2,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
    },
    title: {
        color: '#000',
        fontSize: 32,
        fontWeight: 'bold'
    },
    price: {
        marginTop: verticalScale(10)
    },
    country: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Location: {
        width: scale(30),
        height: verticalScale(30),
        marginVertical: verticalScale(20)
    },

    imgView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    address: {
        color: '#000',
        fontSize: 15,
        marginLeft: moderateScale(12)
    },
    leftImgView: {
        width: scale(38),
        height: verticalScale(33),
        backgroundColor: 'white',
        borderRadius: scale(50),
        alignItems: 'center',
        justifyContent: 'center',

    },
    leftImg: {
        width: scale(16),
        height: verticalScale(17),
        alignSelf: 'center'
    },
    map: {
        width: '100%',
        height: scale(200),
        marginBottom: verticalScale(30)
    },
    fullmapView:{ 
        marginVertical:verticalScale(20),
        
    },
    fullmap:{
        fontSize:20,
        textAlign:'center',
        color:Colors.BLUE
    }
});
export default styles;