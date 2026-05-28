import {View, Image, Text, StyleSheet} from "react-native"
import {BASE_URL} from "../../constants/api"
export default function ArcadeCard({ arcade, width }) {
    return (
        <View style={[styles.card, { width }]}>
            <Image
                style={styles.image}
                source={{ uri: BASE_URL + arcade.photo_url }}
                onError={(e) => console.log("Image error:", e.nativeEvent.error)}
            />
            <View style={styles.body}>
                <Text style={styles.name}>{arcade.name}</Text>
                <View style={styles.divider} />
                <Text style={styles.price}>{arcade.price} €</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#222',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#2a2a2a',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        aspectRatio: 16/9,
        backgroundColor: '#1a1a1a',
    },
    body: {
        padding: 12,
    },
    name: {
        fontSize: 13,
        fontWeight: '500',
        color: '#e8e0d0',
    },
    divider: {
        height: 0.5,
        backgroundColor: '#2a2a2a',
        marginVertical: 8,
    },
    price: {
        fontSize: 13,
        fontWeight: '500',
        color: '#c8bfb0',
    },
})