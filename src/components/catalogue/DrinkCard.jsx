import {View, Image, Text, StyleSheet} from "react-native"
import {BASE_URL} from "../../constants/api"
export default function DrinkCard({ drink, category, width }) {
    const getFlag = (code) => {
        if (!code) return ''
        return code
            .toUpperCase()
            .split('')
            .map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65))
            .join('')
    }
    return (
        <View style={[styles.card, { width }]}>
            <Image
                style={styles.image}
                source={{ uri: BASE_URL + drink.photo_url }}
                onError={(e) => console.log("Image error:", e.nativeEvent.error)}
            />
            <View style={styles.body}>
                <Text style={styles.name}>{drink.name}</Text>
                <View style={styles.subRow}>
                    <Text style={styles.category}>{category?.name ?? "?"}</Text>
                    <Text style={styles.meta}>{getFlag(drink.country_code)} {drink.country}</Text>
                </View>
                <View style={styles.divider} />
                {drink.taste ? <Text style={styles.taste}>🍷 {drink.taste}</Text> : null}
                <View style={styles.priceRow}>
                    <View style={styles.priceItem}>
                        <Text style={styles.priceLabel}>Normal</Text>
                        <Text style={styles.priceVal}>{drink.price_normal ?? "—"} €</Text>
                    </View>
                    <View style={styles.priceItem}>
                        <Text style={styles.priceLabel}>Membre</Text>
                        <Text style={styles.priceValMember}>{drink.price_member ?? "—"} €</Text>
                    </View>
                </View>
                <Text style={styles.description}>
                    {drink.description || "Aucune description disponible"}
                </Text>
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
    subRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
    },
    category: {
        fontSize: 11,
        color: '#666',
    },
    meta: {
        fontSize: 11,
        color: '#555',
    },
    divider: {
        height: 0.5,
        backgroundColor: '#2a2a2a',
        marginVertical: 8,
    },
    taste: {
        fontSize: 11,
        color: '#c8bfb0',
        marginBottom: 6,
    },
    priceRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 6,
    },
    priceItem: {
        flexDirection: 'column',
    },
    priceLabel: {
        fontSize: 10,
        color: '#555',
    },
    priceVal: {
        fontSize: 12,
        fontWeight: '500',
        color: '#c8bfb0',
    },
    priceValMember: {
        fontSize: 12,
        fontWeight: '500',
        color: '#245e97',
    },
    description: {
        fontSize: 11,
        color: '#555',
        lineHeight: 16,
    },
})