import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../Constants/Colors';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';



const AttractionCard = ({ image, Title, subtitle, icon, style, onPress }) => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.card, style]}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.Txttitle}>{Title}</Text>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={icon} />
                <Text style={styles.subTitle}>{subtitle}</Text>
                
            </View>
           
        </TouchableOpacity>
    );
};
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    card: {
        marginRight: moderateScale(30),
        marginLeft: moderateScale(20),
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GREY,
        marginTop:16
    },
    image: {
        width: (width - 70) / 2,
        height: verticalScale(110),
        borderRadius: 15
    },
    Txttitle: {
        color: Colors.BLACK,
        fontSize: 15,
        fontWeight: '500',
        marginTop: verticalScale(20),
        marginLeft: moderateScale(5),

    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(10),
        marginLeft: moderateScale(6),
        marginTop: verticalScale(5)
    },
    icon: {
        width: scale(10),
        height: verticalScale(15),
        marginRight: moderateScale(5)
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '300',
        color:Colors.GREY,
        width:50,
        textAlign:'center'
        
    },
    map:{
        width:'100%',
        height:400,
    }

});
export default React.memo(AttractionCard);
