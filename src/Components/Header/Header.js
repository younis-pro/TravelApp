import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagesPath from '../../Constants/ImagesPath';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const HeaderComponent = ({ style, onPress, leftImage ,leftImgView,}) => {

    return (
        <View style={[styles.container, style,]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.backImgView}>
                <Image style={styles.backImg} source={ImagesPath.BackImage} />
            </TouchableOpacity>
            <View>
            {leftImage}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        margin: moderateScale(10),
        flexDirection: 'row',
        width: '100%',
        padding: moderateScale(10),
       
        
    },
    backImgView: {
        width: scale(38),
        height: verticalScale(33),
        backgroundColor: 'white',
        borderRadius: scale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    backImg: {
        width: scale(20),
        height: verticalScale(10),
        alignSelf: 'center'


    }
});
export default HeaderComponent;
