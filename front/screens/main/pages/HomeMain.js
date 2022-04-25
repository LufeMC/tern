import { useState, useEffect } from "react"
import SwipeCards from 'react-native-swipe-cards';
import { StyleSheet } from "react-native";
import Card from "../../../components/Card";
import itinerariesService from '../../../integrations/itineraries'

const HomeMain = ({route}) => {
    const [itineraries, setItineraries] = useState([])
    const [cardActive, setCardActive] = useState({})
    const {id} = route.params

    useEffect(() => {
        console.log(id)
        itinerariesService.listAll(id, (response) => {
            setItineraries(response)
        })
    }, [id])

    const handleYup = (card) => {
        console.log(`Yup for ${card.name}`)
        itinerariesService.connect({userId: id, itineraryId: card._id}, (response) => {
            console.log(response)
        })
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
            renderCard={(cardData) => <Card name={cardData.name} userName={cardData.author} />}
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