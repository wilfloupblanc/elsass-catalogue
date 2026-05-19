import {View, Image, Text, StyleSheet} from "react-native";
import {BASE_URL} from "../../constants/api";
export function VehiclesCard({ vehicle, category, width }) {
    const difficulty = {
        1: "Débutant",
        2: "Initié",
        3: "Confirmé",
        4: "Expert",
        5: "Professionnel",
    }
    const difficultyColor = {
        1: "#6ab06a",
        2: "#96b06a",
        3: "#b09a4a",
        4: "#c07840",
        5: "#c04040",
    }
    const difficultyBg = {
        1: "#1a2e1a",
        2: "#222a1a",
        3: "#2a2518",
        4: "#2a1e14",
        5: "#2a1414",
    }
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
                source={{ uri: BASE_URL + vehicle.photo_url }}
            />
            <View style={[styles.diffBadgeContainer, { backgroundColor: difficultyBg[vehicle.difficulty] }]}>
                <Text style={[styles.diffBadge, { color: difficultyColor[vehicle.difficulty] }]}>
                    {difficulty[vehicle.difficulty]}
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.name}>{vehicle.name}</Text>
                <View style={styles.subRow}>
                    <Text style={styles.category}>{category?.name ?? "?"}</Text>
                    <Text style={styles.meta}>{getFlag(vehicle.country_code)} {vehicle.country} · {vehicle.year}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statsGrid}>
                    <View style={styles.statItem}>
                        <Text style={styles.statVal}>{vehicle.horsepower} ch</Text>
                        <Text style={styles.statLabel}>Puissance</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statVal}>{vehicle.max_speed} km/h</Text>
                        <Text style={styles.statLabel}>Vitesse max</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statVal}>{vehicle.torque} Nm</Text>
                        <Text style={styles.statLabel}>Couple</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statVal}>{vehicle.power_to_weight} kg/ch</Text>
                        <Text style={styles.statLabel}>Poids/Puissance</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <Text style={styles.description}>
                    {vehicle.description || "Aucune description disponible"}
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
        height: 250,
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
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    statItem: {
        width: '48%',
    },
    statVal: {
        fontSize: 12,
        fontWeight: '500',
        color: '#c8bfb0',
    },
    statLabel: {
        fontSize: 10,
        color: '#555',
        marginTop: 1,
    },
    diffBadgeContainer: {
        position: 'absolute',
        top: 3,
        right: 3,
        padding: 5,
        borderRadius: 4,
    },
    diffBadge: {
        fontSize: 11,
        fontWeight: '500',
    },
    description: {
        fontSize: 11,
        color: '#555',
        lineHeight: 16,
    },
})