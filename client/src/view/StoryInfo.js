import React from 'react'
import {TouchableOpacity} from 'react-native';
import {Card, Box, Spinner, Image, Heading, Text} from 'native-base';
import BottomNavigation from '../component/Footer';
import {useNavigation} from '@react-navigation/native';

const StoryInfo = ({route}) => {
    const {name, image, characters, seasons, translation, release_Date} = route.params
    return (
      <>
        <Card>
            <CardItem header bordered>
                <Text>{name}</Text>
                </CardItem>
                <Image source={{uri: image}} alt={name}/>
                <CardItem bordered>
                <Body>
                    <Text>{seasons}</Text>
                    <Text>{translation}</Text>
                    <Text>{release_Date}</Text>
                    {route.map(() => (
                        <TouchableOpacity>{characters.name}</TouchableOpacity>
                    ))}
                </Body>
                </CardItem>
                <CardItem footer bordered>
                <Text>GeekyAnts</Text>
            </CardItem>
        </Card>
        
        <BottomNavigation/>
      </>
    )
}

export default StoryInfo
