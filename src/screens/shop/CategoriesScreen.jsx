import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import FlatCard from '../../components/FlatCard'
import TextTilliumReg from '../../components/TextTilliumReg'
import { useSelector, useDispatch } from 'react-redux'
import { setCategorieSelected, filterProducts } from '../../shop/shop/shopSlice'

const CategoriesScreen = ({navigation}) => {

    const categories = useSelector(state=>state.shopReducer.categories)

    const dispatch = useDispatch()

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={
            ()=>{
                dispatch(setCategorieSelected(item.title))
                dispatch(filterProducts())
                navigation.navigate("Productos") 
            }}>
            <FlatCard>
                <View style={styles.categoryContainer}>
                    <TextTilliumReg>{item.title}</TextTilliumReg>
                    <Image width={80} height={40} source={{ uri: item.image }} />
                </View>
            </FlatCard>
        </Pressable>

    )
    return (
        <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8
    }
})