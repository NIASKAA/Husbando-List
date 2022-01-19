import React from 'react'
import {TouchableOpacity} from 'react-native';
import {Card, Box, Image, Text, ScrollView} from 'native-base';
import BottomNavigation from '../component/Footer';
import CharacterInfoCard from '../component/CharacterInfoCard';
import {useNavigation} from '@react-navigation/native';

const StoryInfo = ({route, item}) => {
    const {name, image, characters, seasons, translation, release_Date} = route.params;

    return (
      <ScrollView>
        <Box>
            <Card>
                <Image source={{uri: image}} width={500} height={150} alt={name}/>
                <Text>Name: {name}</Text>
                <Text>Characters: </Text>
                {characters.map((item) => (
                    <TouchableOpacity>
                        <Image source={{uri: item.image}} alt={item.name} width={100} height={100}/>
                    </TouchableOpacity>
                ))}
                <Text>Japanese Translation: {translation}</Text>
                <Text>Seasons: {seasons}</Text>
                <Text>Release Date: {release_Date}</Text>
            </Card>
        </Box>
      </ScrollView>
    )
}

export default StoryInfo
