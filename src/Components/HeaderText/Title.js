import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';
const Title = ({ text, style }) => {
    return (
        <View >
           <Text style={style}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
   
   
});
export default React.memo(Title);
