import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, RefreshControl, Button, Switch, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Linking from 'expo-linking'

const ROUTES = [
    'View',
    'Image',
    'Text',
    'ScrollView',
    'KeyboardAvoidingView + TextInput',
    'ImageBackground',
    'Pressable'
]

const OTHERS = [
    'TouchableOpacity',
    'FlatList',
    'RefreshControl',
    // 'Linking',
    // 'Switch + Modal',
    // 'Alert',
]

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false))
    }, [])

    const { colors } = useTheme();
    
    return (
        <FlatList
            data={ROUTES}
            keyExtractor={(item, index) => item}
            extraData={colors}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
            ListHeaderComponent={
                <View style={styles.header}>
                    <Text style={{...styles.title, color: colors.text}}>
                        MAIN COMPONENTS
                    </Text>
                </View>
            }
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style={{...styles.item, backgroundColor: colors.card}}
                    onPress={() => navigation.navigate(item)}
                >
                    <Text style={{...styles.title, color: colors.text}}>
                        {item}
                    </Text>
                </TouchableOpacity>
            )}
            ListFooterComponent={
                <>
                <View style={styles.header}>
                    <Text style={{...styles.title, color: colors.text}}>
                        OTHER COMPONENTS
                    </Text>
                </View>
                <View style={{...styles.item, backgroundColor: colors.card}}>
                    <Button
                        title='Button'
                        color='#841584'
                    />
                </View>
                {OTHERS.map((item, index) => 
                    <TouchableOpacity style={{...styles.item, backgroundColor: colors.card}} key={index}>
                        <Text style={{...styles.title, color: colors.text}}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity 
                    style={{...styles.item, backgroundColor: colors.card}} 
                    onPress={() => {
                        Linking.openURL('https://expo.io')
                    }}
                >
                    <Text style={{...styles.title, color: "#1da1f2"}}>
                        Linking
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{...styles.item, backgroundColor: colors.card}}
                    onPress={() => Alert.alert('ALERT', 'Press OK to dismiss')}
                >
                    <Text style={{...styles.title, color: colors.text}}>
                        ALERT
                    </Text>
                </TouchableOpacity>
                <View style={{...styles.item, backgroundColor: colors.card}}>
                    <Switch
                        value={showModal}
                        onValueChange={() => setShowModal(!showModal)}
                    />
                    <Modal
                        animationType="slide"
                        visible={showModal}
                    >
                        <TouchableOpacity 
                            style={{...styles.item, backgroundColor: colors.card}}
                            onPress={() => setShowModal(!showModal)}
                        >
                            <Text style={{...styles.title, color: colors.text}}>
                                MODAL
                            </Text>
                        </TouchableOpacity>
                    </Modal>
                </View>
                </>
            }
        />
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: { fontSize: 18 }
})