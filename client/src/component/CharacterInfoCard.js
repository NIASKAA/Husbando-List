import React from 'react'
import {TouchableOpacity} from 'react-native';
import {FlatList, Box, Spinner, Image, Heading, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const CharacterInfoCard = ({characters}) => {
    return (
        <>
            <TouchableOpacity>
                <Image source={{uri: image}}/>
                <Text>{name}</Text>
            </TouchableOpacity>
        </>
    )
}

export default CharacterInfoCard
