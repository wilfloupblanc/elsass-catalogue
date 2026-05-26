import {View, Text, Pressable, StyleSheet, FlatList, useWindowDimensions} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useGetAllVehiclesQuery} from "../../store/vehiclesApiSlice";
import TabBar from "../../components/ui/TabBar";
import {useGetAllCategoriesQuery} from "../../store/categoriesApiSlice";
import {useState} from "react";
import {VehiclesCard} from "../../components/catalogue/VehiclesCard";
export default function VehiclesScreen() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const { data} = useGetAllVehiclesQuery()
    const {data: categories} = useGetAllCategoriesQuery()
    const { width } = useWindowDimensions()
    const cardWidth = (width - 24 - 30) / 4
    const vehicles = data?.vehicles?.filter(v => v.is_active === 1)
    const category = categories?.vehiclecategories?.slice().sort((a, b) => a.name.localeCompare(b.name))
    const filteredVehicles = (selectedCategory
        ? vehicles?.filter(v => v.category_id === selectedCategory)
        : vehicles)?.slice().sort((a, b) => a.name.localeCompare(b.name))
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
            <TabBar/>
            <View style={styles.buttonContainer}>
                <Pressable
                    key="all"
                    style={[styles.button, selectedCategory === null && styles.buttonActive]}
                    onPress={() => setSelectedCategory(null)}
                >
                    <Text style={[styles.buttonText, selectedCategory === null && styles.buttonTextActive]}>
                        Tous
                    </Text>
                </Pressable>
                {category?.map((item) => (
                    <Pressable
                        key={item.id}
                        onPress={() => setSelectedCategory(item.id)}
                        style={[styles.button, selectedCategory === item.id && styles.buttonActive]}
                    >
                        <Text style={[styles.buttonText, selectedCategory === item.id && styles.buttonTextActive]}>{item.name}</Text>
                    </Pressable>
                ))}
            </View>
            <FlatList
                key="vehicles-grid-4"
                data={filteredVehicles}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                contentContainerStyle={{ padding: 12, gap: 10 }}
                columnWrapperStyle={{ gap: 10 }}
                renderItem={({ item }) => (
                    <VehiclesCard
                        vehicle={item}
                        category={category?.find(c => c.id === item.category_id)}
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