import { StyleSheet } from 'react-native';
import { scale, verticalScale, } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    map: {
        width: '100%',
        height: '100%',
    },
    backView: {
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        padding: scale(20)



    },
    backImgView: {
        width: scale(38),
        height: verticalScale(33),
        backgroundColor: 'white',
        borderRadius: scale(50),
        alignItems: 'center',
        justifyContent: 'center',


    },
    backImg: {
        width: scale(20),
        height: verticalScale(10),
        alignSelf: 'center'


    },
    country: {

        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',

    },
    Txt: {
        fontSize: 20,
        color: Colors.BLACK,
        fontWeight: 'bold'
    }
});
export default styles;