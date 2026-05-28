import {useNavigation, useRoute} from '@react-navigation/native'
import {Pressable, View, Text, StyleSheet} from "react-native"
export default function TabBar() {
    const route = useRoute()
    const activeTab = route.name
    const navigation = useNavigation()
    const isActive = (name) => activeTab === name
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.elsassLogo}>ELSASS SIMRACING</Text>
            </View>
            <View style={styles.tabsRow}>
                <Pressable
                    onPress={() => navigation.navigate("Véhicules")}
                    style={[styles.tab, isActive("Véhicules") && styles.tabActive]}
                >
                    <Text style={[styles.tabText, isActive("Véhicules") && styles.tabTextActive]}>
                        Véhicules
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Circuits")}
                    style={[styles.tab, isActive("Circuits") && styles.tabActive]}
                >
                    <Text style={[styles.tabText, isActive("Circuits") && styles.tabTextActive]}>
                        Circuits
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Nourriture")}
                    style={[styles.tab, isActive("Nourriture") && styles.tabActive]}
                >
                    <Text style={[styles.tabText, isActive("Nourriture") && styles.tabTextActive]}>
                        Nourriture
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Boissons")}
                    style={[styles.tab, isActive("Boissons") && styles.tabActive]}
                >
                    <Text style={[styles.tabText, isActive("Boissons") && styles.tabTextActive]}>
                        Boissons
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Arcade")}
                    style={[styles.tab, isActive("Arcade") && styles.tabActive]}
                >
                    <Text style={[styles.tabText, isActive("Arcade") && styles.tabTextActive]}>
                        Arcade
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#1f1f1f',
        borderBottomWidth: 0.5,
        borderBottomColor: '#2a2a2a',
    },
    logoContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    elsassLogo: {
        color: '#e8e0d0',
        fontSize: 13,
        fontWeight: '500',
        letterSpacing: 1,
    },
    tabsRow: {
        flexDirection: 'row',
    },
    tab: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    tabActive: {
        borderBottomColor: '#245e97',
    },
    tabText: {
        color: '#666',
        fontSize: 13,
    },
    tabTextActive: {
        color: '#e8e0d0',
    }
})