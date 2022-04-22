import Button from '../../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextInputView from '../../components/TextInput';
import { LinearGradient } from 'expo-linear-gradient';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAlertShown, setIsAlertShown] = useState(false)
    const [message, setMessage] = useState('')

    const enter = () => {
        if (!validate()) {
            setMessage('Please, verify your email before continuing')
            setIsAlertShown(true)
            return
        }

        navigation.navigate('Signup')
    }

    const validate = () => {
        console.log(email)
        if (!email.includes('@')) {
            return false
        } else {
            if (!(email.split('@')[1].includes('.'))) {
                return false
            }
        }

        return true
    }

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
                <View style={styles.logo}>
                    <Image style={styles.logo_img}
                        source={require('../../assets/logo.svg')} resizeMode="contain"></Image>
                </View>

            </View>
            <View style={styles.content}>
                <View style={styles.greeting}>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins_400Regular', color: '#fdad00' }}>Hello!</Text>
                    <Text style={{ fontSize: 34, fontFamily: 'Poppins_700Bold', color: '#fe760d' }}>Let's start?</Text>
                </View>
                <View style={styles.actions}>
                    <View style={{ flex: 15, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins_500Medium', color: '#fe760d' }}>Tell us your email and passowrd</Text>
                    </View>
                    <View style={styles.buttons}>
                        <View style={styles.inputs}>
                            <TextInputView margin={20} placeholder={'Email'} onChange={setEmail} />
                            <TextInputView secureTextEntry={true} placeholder={'Password'} onChange={setPassword} />
                        </View>
                        <View style={styles.enterButton}>
                            <Button title={'Enter'} action={enter} />
                        </View>
                    </View>
                </View>
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
        flex: 3,
        justifyContent: 'flex-end',
        flexDirection: 'column',
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
        flex: 7
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
    }
});

export default Login