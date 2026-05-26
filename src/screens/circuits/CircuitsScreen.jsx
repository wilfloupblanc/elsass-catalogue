import {FlatList, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import TabBar from "../../components/ui/TabBar";
import {SafeAreaView} from "react-native-safe-area-context";
import CircuitsCard from "../../components/catalogue/CircuitsCard";
import {useGetAllCircuitsQuery} from "../../store/circuitsApiSlice";
import {useState} from "react";
export default function CircuitsScreen() {
    const {data} = useGetAllCircuitsQuery()
    const {width} = useWindowDimensions()
    const circuits = data?.circuits?.filter(c => c.is_active === 1)
    const cardWidth = (width - 24 - 30) / 4
    const [selectedCountry, setSelectedCountry] = useState(null)
    const countries = circuits ? [...new Set(circuits.map(c => c.country))].sort((a, b) => a.localeCompare(b, 'fr')) : []
    const filteredCircuits = (selectedCountry
        ? circuits?.filter(c => c.country === selectedCountry)
        : circuits)?.slice().sort((a, b) => {
        if (a.country !== b.country) return a.country.localeCompare(b.country, 'fr')
        return a.name.localeCompare(b.name, 'fr')
    })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
            <TabBar/>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, selectedCountry === null && styles.buttonActive]}
                    onPress={() => setSelectedCountry(null)}
                >
                    <Text style={[styles.buttonText, selectedCountry === null && styles.buttonTextActive]}>
                        Tous
                    </Text>
                </Pressable>
                {countries?.map((item) => (
                    <Pressable
                        key={item}
                        onPress={() => setSelectedCountry(item)}
                        style={[styles.button, selectedCountry === item && styles.buttonActive]}
                    >
                        <Text style={[styles.buttonText, selectedCountry === item && styles.buttonTextActive]}>
                            {item}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <FlatList
                key="circuits-grid-4"
                data={filteredCircuits}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                contentContainerStyle={{ padding: 12, gap: 10 }}
                columnWrapperStyle={{ gap: 10 }}
                renderItem={({ item }) => (
                    <CircuitsCard
                        circuit={item}
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