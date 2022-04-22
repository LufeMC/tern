import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function TextInputView({type = 'text', secureTextEntry = false, backgroundColor = "white", color = '#595959', placeholder, margin = 0, onChange = () => {}, width = '80%'}) {
    const [textInputInfo, setTextInputInfo] = useState('')

    useEffect(() => {
        onChange(textInputInfo)
    }, [textInputInfo])

    return(
        <TextInput type={type} secureTextEntry={secureTextEntry} placeholderTextColor={'#595959'} onChangeText = {setTextInputInfo} value = {textInputInfo} style = {[styles.inputText, {width, marginBottom: margin, backgroundColor, color}]} placeholder = {placeholder}/>
    )
}

const styles = StyleSheet.create({
    inputText: {
        paddingHorizontal: 22,
        paddingVertical: 15,
        borderRadius: 45,
        textAlign: 'left',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: '#fdad00',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 0
    }
})