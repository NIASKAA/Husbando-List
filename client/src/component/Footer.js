import React from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native';
import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    HStack,
    Center,
    Pressable,
  } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Footer = () => {
    const navigation = useNavigation();
    
    return (
        <NativeBaseProvider>
            <Box flex={1} bg="white" safeAreaTop>
                <Center flex={1}></Center>
                <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable
                        cursor="pointer"
                        py="3"
                        flex={1}
                        onPress={() => setSelected(0)}>
                        <Center>
                        <Icon
                            mb="1"
                            as={
                            <MaterialCommunityIcons
                                name={selected === 0 ? 'home' : 'home-outline'}
                            />
                            }
                            color="white"
                            size="sm"
                        />
                        <Text color="white" fontSize="12">
                            Home
                        </Text>
                        </Center>
                    </Pressable>

                    <Pressable
                        cursor="pointer"
                        py="3"
                        flex={1}
                        onPress={() => setSelected(0)}>
                        <Center>
                        <Icon
                            mb="1"
                            as={
                            <MaterialCommunityIcons
                                name={selected === 0 ? 'search' : 'home-outline'}
                            />
                            }
                            color="white"
                            size="sm"
                        />
                        <Text color="white" fontSize="12">
                            Search
                        </Text>
                        </Center>
                    </Pressable>

                    <Pressable
                        cursor="pointer"
                        py="2"
                        flex={1}
                        onPress={() => setSelected(1)}
                    >
                        <Center>
                        <Icon
                            mb="1"
                            as={<MaterialIcons name="search" />}
                            color="white"
                            size="sm"
                        />
                        <Text color="white" fontSize="12">
                            Favorite Stories
                        </Text>
                        </Center>
                    </Pressable>

                    <Pressable
                        cursor="pointer"
                        py="2"
                        flex={1}
                        onPress={() => setSelected(1)}
                    >
                        <Center>
                        <Icon
                            mb="1"
                            as={<MaterialIcons name="search" />}
                            color="white"
                            size="sm"
                        />
                        <Text color="white" fontSize="12">
                            Favorite Characters
                        </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
        </NativeBaseProvider>
    )
}

export default Footer
