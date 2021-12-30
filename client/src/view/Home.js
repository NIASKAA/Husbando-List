import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList, Box, Heading, Center, Text, Spinner, Image} from 'native-base';
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "@apollo/client";
import {GET_ALL_STORIES} from '../utils/queries';
import {GET_STORIES} from '../utils/state/actions';
import {useNavigation} from '@react-navigation/native';
import Footer from '../component/Footer';

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
        <Box
            w={{
                base: "100%",
                md: "100%",
            }}
        >
            
            <FlatList
                px="12"
                mb="4"
            data={allStories}
            renderItem={({item, index}) => (
                <TouchableOpacity key={index._id}>
                    <Image width={500} height={150} resizeMode={"cover"} source={{uri: item.image}} alt={item.name}/>
                </TouchableOpacity>
            )}
            />
            
            <Footer/>
        </Box>
    )
}

export default Home
