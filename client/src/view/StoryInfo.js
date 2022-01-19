import React from 'react'
import {TouchableOpacity} from 'react-native';
import {Card, Box, CardItem, Image, Heading, Text, Body} from 'native-base';
import BottomNavigation from '../component/Footer';
import CharacterInfoCard from '../component/CharacterInfoCard';
import {useNavigation} from '@react-navigation/native';

const StoryInfo = ({route}) => {
    const {name, image, characters, seasons, translation, release_Date} = route.params;
    console.log(characters);
        
    return (
      <>
        <Box>
            <Card>
                <Image source={{uri: image}} width={500} height={150} alt={name}/>
                <Text>Name: {name}</Text>
                <Text>Japanese Translation: {translation}</Text>
                <Text>Seasons: {seasons}</Text>
                <Text>Release Date: {release_Date}</Text>
            </Card>
        </Box>
      </>
    )
}

export default StoryInfo
