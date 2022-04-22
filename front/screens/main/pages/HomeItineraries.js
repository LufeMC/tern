import { useState, useEffect } from "react"
import { FlatList, View } from "react-native"
import Button from "../../../components/Button"

const HomeItineraries = () => {
    const [itineraries, setItineraries] = useState([
        { name: 'Brazil'},
        { name: 'Argentina'},
        { name: 'Paris'},
    ])

    return (
        <FlatList
            data={itineraries}
            renderItem={({ item }) => (
                <View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%' }}>
                        <Button width ='100%' title={item.name} action={() => { }} backgroundColor='transparent' borderWidth={1} textColor='black' />
                    </View>
                </View>
            )}
            keyExtractor={item => item.name + 'ItineraryPageAt' + new Date().getTime()}
        />
    )
}

export default HomeItineraries