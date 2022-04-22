import { View, Text } from "react-native"
import { useState, useEffect } from "react"

const Card = ({name, userName}) => {
    const [itineraryName, setItiineraryName] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(userName)
        setItiineraryName(name)
    }, [name])

    return (
        <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 30, fontFamily: 'Poppins_900Black', color: '#fe760d' }}>{itineraryName}</Text>
            <Text style={{ fontSize: 20, fontFamily: 'Poppins_700Bold_Italic', color: '#fdad00' }}>Created by {user}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Poppins_500Medium', color: 'rgba(100,100,100)' }}>Swipe left for ignore or right to copy the itinerary</Text>
        </View>
    )
}

export default Card