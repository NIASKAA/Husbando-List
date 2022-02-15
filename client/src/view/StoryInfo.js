import React from 'react';
import {useMutation} from '@apollo/client';
import {TouchableOpacity, Alert} from 'react-native';
import {Card, Box, Image, Text, ScrollView} from 'native-base';
import BottomNavigation from '../component/Footer';
import CharacterInfoCard from '../component/CharacterInfoCard';
import {useNavigation} from '@react-navigation/native';
import { ADD_ALREADY_READ, ADD_FAVORITES_STORIES, ADD_TO_COMPLETE_LIST } from '../utils/mutations';

const StoryInfo = ({route, item}) => {
    const navigation = useNavigation();
    const {name, image, characters, seasons, translation, release_Date} = route.params;
    const [addToAlreadyRead] = useMutation(ADD_ALREADY_READ);
    const [addToFavoriteStories] = useMutation(ADD_FAVORITES_STORIES);
    const [addToCompleteList] = useMutation(ADD_TO_COMPLETE_LIST);
    const [ProfileData, setProfileData] = useState({
        id: 'Cant find ID',
        already_Read: 'Nothing in list',
        favorite_Stories: 'Nothing in list',
        to_Complete_List: 'Nothing in list'
    });

    const [errors, setErrors] = useState({
        addToAlreadySuccess: null,
        addToAlreadyFail: null,
        addToFavoriteSuccess: null,
        addToFavoriteFail: null,
        addToCompleteSuccess: null,
        addToCompleteFail: null
    });

    const saveToAlready = async () => {
        try {
            const response = await addToAlreadyRead({
                variables: {
                    name: name
                }
            })
            setProfileData({...ProfileData, already_Read: response})
            setErrors({...errors, addToAlreadySuccess: true})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToAlreadyFail: true})
        }
    }

    const saveToFavorites = async () => {
        try {
            const response = await addToFavoriteStories({
                variables: {
                    name: name
                }
            })
            setProfileData({...ProfileData, favorite_Stories: response});
            setErrors({...errors, addToFavoriteSuccess: true});
        } catch (error) {
            console.log(error);
            setErrors({...errors, addToFavoriteFail: true});
        }
    }

    const saveToComplete = async () => {
        try {
            const response = await addToCompleteList({
                variables: {
                    name: name
                }
            })
            setProfileData({...ProfileData, to_Complete_List: response});
            setErrors({...errors, addToCompleteSuccess: true});
        } catch (error) {
            console.log(error);
            setErrors({errors, addToCompleteFail: true});
        }
    }

    if(errors.addToAlreadySuccess === true) {
        Alert.alert('Added!')
    } else Alert.alert('Error...')

    if(errors.addToFavoriteSuccess === true) {
        Alert.alert('Added!')
    } else Alert.alert('Error...')

    if(errors.addToCompleteSuccess === true) {
        Alert.alert('Added!')
    } else Alert.alert('Error...')
 
    return (
      <ScrollView>
        <Box>
            <Card>
                <Image source={{uri: image}} width={500} height={150} alt={name}/>
                <Text>Name: {name}</Text>
                <Text>Characters: </Text>
                {characters.map((item) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CharacterInfoCard', item)}>
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
