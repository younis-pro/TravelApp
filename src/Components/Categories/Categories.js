import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../../Constants/Colors';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const Categories = ({ category, SelectedCategory, onPressCategory }) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={({ item, index }) => {
                const Selected = SelectedCategory === item;
                return (
                    <TouchableOpacity activeOpacity={0.6} onPress={() => onPressCategory(item)}
                        style={[styles.itemContainer, Selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 25 } : {}]}>

                        <Text style={[styles.item, Selected ? styles.selectedItem : {}]}> {item} </Text>
                    </TouchableOpacity>
                )
            }}

        />
    );
};
const styles = StyleSheet.create({

    itemContainer: {
        marginVertical: verticalScale(14),
        marginRight: moderateScale(17),
    },
    selectedItemContainer: {
        borderBottomColor: 'blue',
        borderBottomWidth: scale(1),

    },
    item: {
        paddingVertical: verticalScale(2),
        color: Colors.GREY,
        fontSize: 20,
        textAlign: 'center',



    },
    selectedItem: {
        color: Colors.BLACK,
        fontWeight: 'bold'
    }
});
export default React.memo(Categories);
