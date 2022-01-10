import React from 'react'
import {TouchableOpacity} from 'react-native';
import {Card, Box, Spinner, Image, Heading, Text} from 'native-base';
import BottomNavigation from '../component/Footer';
import {useNavigation} from '@react-navigation/native';

const StoryInfo = ({route}) => {
    const {name, image, characters, seasons, translation, release_Date} = route.params
    return (
      <>

      </>
    )
}

export default StoryInfo
