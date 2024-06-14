import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import ImagesPath from '../../Constants/ImagesPath';
import styles from './style';
const Map = ({ navigation, route }) => {
    const onBack = () => navigation.goBack()
    const { item } = route?.params || {};

    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={coords}>
                <Marker coordinate={coords} title={item?.name} />

            </MapView>
            <View style={styles.backView}>
                <TouchableOpacity onPress={onBack} activeOpacity={0.5} style={styles.backImgView}>
                    <Image style={styles.backImg} source={ImagesPath.BackImage} />
                </TouchableOpacity>
                <View style={styles.country}>
                    <Text style={styles.Txt}>{`${item?.country} , ${item?.city}`} </Text>

                </View>
            </View>


        </View>

    );
};

export default React.memo(Map);
