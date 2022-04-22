import { useState, useEffect } from "react"
import SwipeCards from 'react-native-swipe-cards';
import { StyleSheet } from "react-native";
import Card from "../../../components/Card";

const HomeMain = () => {
    const [itineraries, setItineraries] = useState([
        { name: 'USA', user: 'John' },
        { name: 'Rio Grande do Sul', user: 'Mary' },
        { name: 'Seoul', user: 'Steven' },
        { name: 'Ireland', user: 'Nikole' },
        { name: 'Chennai', user: 'Madhu' },
        { name: 'Recife', user: 'Felipe' },
    ])
    const [cardActive, setCardActive] = useState({})

    useEffect(() => {
        console.log(itineraries)
    }, [itineraries])

    const handleYup = (card) => {
        console.log(`Yup for ${card.name}`)
    }

    const handleNope = (card) => {
        console.log(`Nope for ${card.name}`)
    }

    const cardRemoved = (index) => {
        console.log(`The index is ${index}`);
    }

    return (
        <SwipeCards
            cards={itineraries}
            renderCard={(cardData) => <Card name={cardData.name} userName={cardData.user} />}
            renderNoMoreCards={() => <Card name='No more cards' userName='' />}
            containerStyle={styles.container}
            handleYup={handleYup}
            handleNope={handleNope}
            showYup={false}
            showNope={false}
            cardRemoved={cardRemoved.bind(this)}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        background: 'red'
    }
})

export default HomeMain