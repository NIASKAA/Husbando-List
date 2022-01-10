import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, Box, Spinner, Image, Heading, Text} from 'native-base';
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "@apollo/client";
import {GET_ALL_STORIES} from '../utils/queries';
import {GET_STORIES} from '../utils/state/actions';
import {useNavigation} from '@react-navigation/native';
import FooterTab from '../component/Footer'
import BottomNavigation from '../component/Footer';

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [loadStories, setLoadStories] = useState(false);
    const {loading, data} = useQuery(GET_ALL_STORIES);
    let {getStories} = state;
    const [allStories, setAllStories] = useState(() => []);

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_STORIES, payload: data.getStories});  
            if(getStories.length === 0) {
                setAllStories(data.getStories)
            } else {
                setAllStories(getStories)
            }
        }
    }, [loading, data]);

    useEffect(() => {
        setTimeout(() => {
            setLoadStories(false);
        }, 3000);
    }, [loadStories]);

    if (loading) return <Spinner accessibilityLabel="Loading posts" />
    
    return (
        <>
            
                <FlatList
                    px="2"
                    mb="4"
                data={allStories}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('StoryInfo', item)} key={index._id}>
                        <Image width={500} height={150} resizeMode={"cover"} source={{uri: item.image}} alt={item.name}/>
                    </TouchableOpacity>
                )}
                />
            <BottomNavigation/> 
        </>

    )
}

export default Home
