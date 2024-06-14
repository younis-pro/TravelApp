import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, FlatList, Text } from 'react-native';
import AttractionCard from '../../Components/AttractionCard/AttractionCard';
import Categories from '../../Components/Categories/Categories';
import Title from '../../Components/HeaderText/Title';
import Colors from '../../Constants/Colors';
import ImagesPath from '../../Constants/ImagesPath';
import AttractionData from '../../Data/AttractionData';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import categories from '../../Data/categories';
const Home = ({ navigation }) => {
    const All = 'All';
    const [selectCategory, setSelectCategory] = useState(All);
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(AttractionData);
    }, [])
    useEffect(() => {
        if (selectCategory === All) {
            setData(AttractionData)
        } else {
            const filteredData = AttractionData?.filter(item => item?.categories?.includes(selectCategory));
            setData(filteredData);
        }
    }, [selectCategory])

    const HeaderComponent = () => {
        return (
            <>
                <View style={{ marginTop: 30, margin: 20 }}>
                    <Title style={[styles.title,]} text={'Where do'} />
                    <Title style={[styles.title, styles.text]} text={'you want to go'} />
                    <Title style={[styles.title, styles.explore]} text={'Explore Extractions'} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Categories
                        SelectedCategory={selectCategory}
                        onPressCategory={setSelectCategory}
                        category={[All, ...categories]} />
                </View>
            </>

        )
    }
    const renderCardAttraction = ({ item, index }) => {
        return (
            <View style={styles.cardContainer} >
                <AttractionCard
                    key={item.id}
                    style={index % 2 === 0 ? { marginRight: moderateScale(12) } : {}}
                    image={item.images?.length ? item.images[0] : null}
                    Title={item.name}
                    icon={ImagesPath.Location}
                    subtitle={item.country}
                    onPress={() => navigation.navigate('Detail', { item })}
                />
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1, }}
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                ListEmptyComponent={(<Text style={styles.emptyText}>No Data Found</Text>)}
                ListHeaderComponent={HeaderComponent}
                keyExtractor={item => String(item?.id)}
                renderItem={renderCardAttraction}
            />
        </View>

    );
};
const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    title: {
        color: Colors.BLUE,
        fontSize: 32,
    },
    text: {
        fontWeight: 'bold'
    },
    explore: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: verticalScale(32),

    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: verticalScale(50),
        color: 'rgba(0,0,0,0.5)'
    }
});
export default React.memo(Home);
