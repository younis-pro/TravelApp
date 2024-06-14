import React, { useState } from 'react';
import { View, Text, ImageBackground,Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComponent from '../../Components/Header/Header';
import FooterImages from '../../Components/FooterImages/Footer';
import ImagesPath from '../../Constants/ImagesPath';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import styles from './style';

const Detail = ({ navigation, route, }) => {
    const onBack = () => navigation.goBack()
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const onImage = () => {
        navigation.navigate('Gallery', { images: item?.images })
    }
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    }
    const onFullMap = () =>{
        navigation.navigate('Map',{item})
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.mainimage}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri: mainImage }}>
                <HeaderComponent onPress={onBack}
                    leftImage={(
                        <TouchableOpacity activeOpacity={0.5} style={styles.leftImgView}>
                            <Image style={styles.leftImg} source={ImagesPath.Export} />
                        </TouchableOpacity>

                    )}
                />
                <FooterImages onPress={onImage} style={styles.footer} item={item} />

            </ImageBackground>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item?.name}</Text>
                <Text style={[styles.title, styles.price]}>{item?.entry_price}</Text>
            </View>
            <View>
                <Text style={styles.country}>{item?.country}</Text>
            </View>
            <View style={styles.imgView}>
                <Image style={styles.Location} source={ImagesPath.Location} />
                <Text style={styles.address}>{item?.address}</Text>
            </View>
            <View style={[styles.imgView,]}>
                <Image style={styles.Location} source={ImagesPath.Clock} />
                <Text style={styles.address}>{`OPEN 
${item?.opening_time} - ${item?.closing_time}`}
                </Text>

            </View>

            <MapView
                style={styles.map}
                initialRegion={coords}
            >
                <Marker
                    coordinate={coords}
                    title={item?.name}
                />
            </MapView>
            <TouchableOpacity onPress={onFullMap} style={styles.fullmapView}>
                <Text style={styles.fullmap}> Show Full Map View</Text>
            </TouchableOpacity>

        </ScrollView>

    );
};
export default React.memo(Detail);
