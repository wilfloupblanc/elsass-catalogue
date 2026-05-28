import {FlatList, StyleSheet, useWindowDimensions} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import TabBar from "../../components/ui/TabBar"
import {useGetAllArcadeItemsQuery} from "../../store/arcadeItemsApiSlice"
import ArcadeCard from "../../components/catalogue/ArcadeCard"
export default function ArcadeScreen() {
    const {data} = useGetAllArcadeItemsQuery()
    const {width} = useWindowDimensions()
    const cardWidth = (width - 24 - 30) / 4
    const arcades = data?.arcadeitems?.filter(a => a.is_active === 1)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
            <TabBar/>
            <FlatList
                key="arcade-grid-4"
                data={arcades}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                contentContainerStyle={{ padding: 12, gap: 10 }}
                columnWrapperStyle={{ gap: 10 }}
                renderItem={({ item }) => (
                    <ArcadeCard
                        arcade={item}
                        width={cardWidth}
                    />
                )}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})