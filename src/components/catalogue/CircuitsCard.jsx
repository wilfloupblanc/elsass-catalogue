import {Text, View, Image, StyleSheet} from "react-native";
import {BASE_URL} from "../../constants/api";
import { getEmojiFlag } from 'country-flag-icons'
export default function CircuitsCard({circuit, width}) {
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
            <Image style={styles.image} source={{ uri: BASE_URL + circuit.photo_url }}/>
            <View style={[styles.diffBadgeContainer, { backgroundColor: difficultyBg[circuit.difficulty] }]}>
                <Text style={[styles.diffBadge, { color: difficultyColor[circuit.difficulty] }]}>
                    {difficulty[circuit.difficulty]}
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.name}>{circuit.name}</Text>
                <View style={styles.subRow}>
                    <Text style={styles.meta}>{getFlag(circuit.country_code)} {circuit.country}</Text>
                    <Text style={styles.meta}>{(circuit.length_m / 1000).toFixed(1)} km</Text>
                </View>
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
    meta: {
        fontSize: 11,
        color: '#666',
    },
    divider: {
        height: 0.5,
        backgroundColor: '#2a2a2a',
        marginVertical: 8,
    },
    diffBadgeContainer: {
        position: 'absolute',
        top: 3,
        right: 3,
        padding: 5,
        borderRadius: 4,
        marginBottom: 6,
    },
    diffBadge: {
        fontSize: 11,
        fontWeight: '500',
    },
})