import {FlatList, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import TabBar from "../../components/ui/TabBar"
import {useGetAllFoodItemsQuery} from "../../store/foodItemsApiSlice"
import {useGetAllFoodCategoriesQuery} from "../../store/foodCategoriesApiSlice"
import {useState} from "react"
import FoodCard from "../../components/catalogue/FoodCard"
export default function FoodScreen() {
    const {data} = useGetAllFoodItemsQuery()
    const {data: categoriesData} = useGetAllFoodCategoriesQuery()
    const {width} = useWindowDimensions()
    const cardWidth = (width - 24 - 30) / 4
    const [selectedCategory, setSelectedCategory] = useState(null)
    const foods = data?.fooditems?.filter(f => f.is_active === 1)
    const categories = categoriesData?.foodcategories?.slice().sort((a, b) => a.name.localeCompare(b.name, 'fr'))
    const filteredFoods = (selectedCategory
        ? foods?.filter(f => f.category_id === selectedCategory)
        : foods)?.slice().sort((a, b) => {
        const catA = categories?.find(c => c.id === a.category_id)?.name ?? ''
        const catB = categories?.find(c => c.id === b.category_id)?.name ?? ''
        if (catA !== catB) return catA.localeCompare(catB, 'fr')
        return a.name.localeCompare(b.name, 'fr')
    })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
            <TabBar/>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, selectedCategory === null && styles.buttonActive]}
                    onPress={() => setSelectedCategory(null)}
                >
                    <Text style={[styles.buttonText, selectedCategory === null && styles.buttonTextActive]}>
                        Tous
                    </Text>
                </Pressable>
                {categories?.map((item) => (
                    <Pressable
                        key={item.id}
                        onPress={() => setSelectedCategory(item.id)}
                        style={[styles.button, selectedCategory === item.id && styles.buttonActive]}
                    >
                        <Text style={[styles.buttonText, selectedCategory === item.id && styles.buttonTextActive]}>
                            {item.name}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <FlatList
                key="food-grid-4"
                data={filteredFoods}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                contentContainerStyle={{ padding: 12, gap: 10 }}
                columnWrapperStyle={{ gap: 10 }}
                renderItem={({ item }) => (
                    <FoodCard
                        food={item}
                        category={categories?.find(c => c.id === item.category_id)}
                        width={cardWidth}
                    />
                )}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        borderWidth: 0.5,
        borderColor: '#666',
        minWidth: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#666',
        fontSize: 18,
    },
    buttonActive: {
        borderColor: '#245e97',
    },
    buttonTextActive: {
        color: '#e8e0d0',
    }
})