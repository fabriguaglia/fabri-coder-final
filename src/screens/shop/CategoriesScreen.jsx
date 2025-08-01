import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import categories from '../../data/categories.json'
import FlatCard from '../../components/FlatCard'
import TextTilliumReg from '../../components/TextTilliumReg'

const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=>navigation.navigate("Productos",{category:item.title})}>
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