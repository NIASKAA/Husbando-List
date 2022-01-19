import React from 'react'
import {TouchableOpacity} from 'react-native';
import {FlatList, Box, Spinner, Image, Heading, Text, Card} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const CharacterInfoCard = ({route, characters}) => {
    const {name, image, age, description} = route.params;

    return (
        <>
            <Card>
                <Image source={{uri: image}} alt={name} width={200} height={200}/>
                <Text>Name: {name}</Text>
                <Text>Age: {age}</Text>
                <Text>Details: {description}</Text>
            </Card>
        </>
    )
}

export default CharacterInfoCard
