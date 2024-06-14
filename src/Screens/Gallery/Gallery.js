import React from 'react';
import { View, FlatList, Image, } from 'react-native';
import HeaderComponent from '../../Components/Header/Header';
import styles from './style';
const Gallery = ({route , navigation}) => {
  const {images} = route?.params || {};
  const goBack = ()=>{
    navigation.goBack()
  } 
  const renderImages = ({item})=>{
    return(
      <View >
        
        <Image source={{uri:item}} style={styles.images} />
        
      </View>
    )
  }
    return (
      <View style={{paddingHorizontal:12,marginBottom:10}}>
        
        <FlatList
        data={images}
        renderItem={renderImages}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        />
        
        <HeaderComponent onPress={goBack} style={styles.header}/>
      </View>

    );
};
export default React.memo(Gallery);
