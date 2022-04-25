import Button from '../../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextInputView from '../../components/TextInput';
import { LinearGradient } from 'expo-linear-gradient';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Pressable } from 'react-native';
import { FlatList } from 'react-native';
import itinerariesService from '../../integrations/itineraries'

const AddItinerarySignup = ({route, navigation}) => {
    const [newActivityName, setNewActivityName] = useState('')
    const [isAlertShown, setIsAlertShown] = useState(false)
    const [activities, setActivities] = useState([])
    const [itineraryName, setItiineraryName] = useState('')
    const {userId, userName} = route.params

    const finishSignup = () => {
        if (activities && activities.length) {
            itinerariesService.save({
                name: itineraryName,
                author: userName,
                events: activities.map(activity => {
                    return {name: activity}
                })
            }, (response) => {
                skip()
            })
        } else {
            skip()
        }
    }

    const skip = () => {
        navigation.navigate('Home', {screen: 'Main', params: {id: userId}})
    }

    const addActivity = () => {
        setIsAlertShown(true)
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
                    backgroundColor: '#fdad00',
                    borderRadius: 50,
                    width: '100%',
                }}></View>}
                style={{ backgroundColor: 'white' }}
            >
                <TextInputView margin={10} placeholder={'Activity'} onChange={setNewActivityName} />
                <Button title={'Add'} action={() => {
                    setActivities(prev => [...prev, newActivityName])
                    setNewActivityName('')
                    setIsAlertShown(false)
                }} />
            </FancyAlert>
            <View style={styles.greeting}>
                <Pressable style={{ alignSelf: 'flex-end' }} onPress={skip}>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins_700Bold', color: 'rgb(130,130,130)', marginRight: 10 }}>Skip</Text>
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Poppins_700Bold', color: '#fdad00' }}>Do you want to add a new itinerary now?</Text>
            </View>
            <View style={styles.inputs}>
                <TextInputView margin={0} placeholder={'Itinerary Name'} onChange={setItiineraryName} />
                {/* <TextInputView margin={0} placeholder={'Itinerary Image'} onChange={setItiineraryImage} /> */}
                <View style={{ flex: 1, width: '100%', marginVertical: 20, justifyContent: 'flex-start', alignContent: 'center', alignItems: 'stretch' }}>
                    <FlatList
                        data={activities}
                        renderItem={({ item }) => (
                            <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                <View style={{ padding: 5, marginVertical: 3, backgroundColor: 'white', borderRadius: 10, width: '80%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Poppins_500Medium', color: 'black' }}>{item}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item}
                    />
                </View>
                <Button title={'Add activity'} action={addActivity} backgroundColor='transparent' borderWidth={1} textColor='black' />
            </View>
            <View style={styles.actions}>
                <Button title={'Finish'} action={finishSignup} />
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
        flex: 15,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        flex: 75,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    actions: {
        flex: 10,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center'
    },
})

export default AddItinerarySignup