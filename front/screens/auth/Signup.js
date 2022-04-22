import Button from '../../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextInputView from '../../components/TextInput';
import { LinearGradient } from 'expo-linear-gradient';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const Signup = ({navigation}) => {
    const [name, setName] = useState('')
    const [isAlertShown, setIsAlertShown] = useState(false)
    const [message, setMessage] = useState('')

    const continueSignup = () => {
        if (!validate()) {
            setIsAlertShown(true)
            setMessage('Please add your name')
            return
        }

        navigation.navigate('AddItinerarySignup')
    }

    const validate = () => {
        if (!name.trim() || name.trim() === '') {
            return false
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

            <View style={styles.greeting}>
                <Text style={{  textAlign: 'center', fontSize: 20, fontFamily: 'Poppins_700Bold', color: '#fdad00' }}>We just need to know your name</Text>
            </View>
            <View style={styles.inputs}>
                <TextInputView margin={0} placeholder={'Name'} onChange={setName} />
            </View>
            <View style={styles.actions}>
                <Button title={'Continue'} action={continueSignup} />
            </View>
        </LinearGradient>
    )
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
    greeting: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    actions: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center'
    },
})

export default Signup