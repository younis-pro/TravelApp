import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const FooterImages = ({ item, style, onPress }) => {
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;
    return (
        
            <View style={[styles.footer, style]}>
                {slicedImages.map((image, index) => (
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress} key={image}>
                        <Image style={styles.footerImages} source={{ uri: image }} />
                        {diffImages > 0 && index === slicedImages?.length - 1 ? (
                            <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                        ) : null}
                    </TouchableOpacity>
                ))}
            </View>
      
    );
};
const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'rgba(256,256,256,0.35)',
        margin: moderateScale(16),
        paddingHorizontal: moderateScale(8)
    },
    footerImages: {
        width: scale(40),
        height: verticalScale(45),
        margin: moderateScale(6),
        borderRadius: 10,

    },
    moreImages: {
        fontSize: 20,
        position: 'absolute',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        top: verticalScale(15),
        left: moderateScale(15)
    }
});

export default FooterImages;
