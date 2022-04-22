import Button from '../../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import TextInputView from '../../components/TextInput';
import { LinearGradient } from 'expo-linear-gradient';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import HomeMain from './pages/HomeMain';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeItineraries from './pages/HomeItineraries';

const App = createNativeStackNavigator();

const Home = ({ navigation }) => {
    const [user, setEmail] = useState('Luis')
    const [isAlertShown, setIsAlertShown] = useState(false)
    const [message, setMessage] = useState('')

    return (
        <LinearGradient colors={['#fffae4', '#f2edd8']} style={styles.container}>
            <FancyAlert
                visible={isAlertShown}
                icon={<View style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    borderRadius: 50,
                    width: '100%',
                }}></View>}
                style={{ backgroundColor: 'white' }}
            >
                <Text style={{ fontSize: 15, fontFamily: 'Poppins_700Bold', color: 'black', textAlign: 'center' }}>{message}</Text>
                <Button title={'Close'} action={() => setIsAlertShown(false)} backgroundColor='red' />
            </FancyAlert>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, fontFamily: 'Poppins_900Black', color: '#fe760d' }}>Hello, {user}</Text>
            </View>
            <View style={styles.content}>
                <App.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <App.Screen name="Main" component={HomeMain} />
                    <App.Screen name="Itineraries" component={HomeItineraries} />
                </App.Navigator>
            </View>
            <View style={styles.footer}>
                <Pressable onPress={() => navigation.navigate('Home', { screen: 'Main' })}>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins_600SemiBold', color: 'black', textAlign: 'center' }}>Home</Text>
                </Pressable>
                <Text style={{ fontSize: 15, fontFamily: 'Poppins_900Black', color: 'black', textAlign: 'center' }}>|</Text>
                <Pressable  onPress={() => navigation.navigate('Home', { screen: 'Itineraries' })}>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins_600SemiBold', color: 'black', textAlign: 'center' }}>Itineraries</Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch'
    },
    image_container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
    header: {
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 40,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
    },
    shield: {
        flex: 60,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo_img: {
        height: '70%',
        width: 187
    },
    shield_img: {
        height: '70%',
        width: 187
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'stretch'
    },
    greeting: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 3
    },
    actions: {
        flex: 7,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'stretch',
    },
    buttons: {
        flex: 85,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'stretch'
    },
    inputs: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    enterButton: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    footer: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default Home