import {useNavigation, useRoute} from '@react-navigation/native'
import {Pressable, View, Text, StyleSheet} from "react-native";

export default function TabBar() {
    const route = useRoute()
    const activeTab = route.name
    const navigation = useNavigation()
    const isActive = (name) => activeTab === name

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.elsassLogo}>Elsass SimRacing</Text>
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
                    onPress={() => {
                        navigation.navigate("Circuits")
                    }}
                    style={[styles.tab, isActive("Circuits") && styles.tabActive]}
                >
                    <Text style={[styles.tabText, isActive("Circuits") && styles.tabTextActive]}>
                        Circuits
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
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#2a2a2a',
    },
    tabsRow: {
        flexDirection: 'row',

    },
    elsassLogo: {
        color: '#e8e0d0',
        fontSize: 30,
        fontWeight: '500',
        letterSpacing: 1,
        paddingHorizontal: 20,
        alignSelf: 'left',
    },
    tab: {
        flex: 1,
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    tabActive: {
        borderBottomColor: '#245e97',
    },
    tabText: {
        color: '#666',
        fontSize: 30,
    },
    tabTextActive: {
        color: '#e8e0d0',
    }
})