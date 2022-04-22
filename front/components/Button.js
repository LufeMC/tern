import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

export default function Button({ title, action, width = '80%', backgroundColor = '#fdad00', textColor = 'white', fontSize = 16, borderColor = 'black', borderWidth = 0 }) {

    return (
        <TouchableOpacity style={[styles.button, { width, backgroundColor, borderColor, borderWidth }]} onClick={action} onPress={action}>
            <Text style={{ color: textColor, fontSize, fontFamily: 'Poppins_700Bold' }}>{title}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 22,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 45,
        shadowOffset: {
            width: 9,
            height: 15
        },
        shadowOpacity: 0.1,
        shadowRadius: 30,
        marginBottom: 10
    }
})