import React from 'react'
import { useNavigation} from '@react-navigation/native';
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

const Footer = () => {
    const navigation = useNavigation();
    
    return (
        
        <Box flex={1} bg="white" safeAreaTop>
            <Center flex={1}></Center>
            <HStack bg="indigo.400" alignItems="center" safeAreaBottom shadow={6}>
                <Pressable
                    cursor="pointer"
                    py="3"
                    flex={1}
                    onPress={() => setSelected(0)}>
                    <Center>
                    <Text color="black" fontSize="12">
                        Home
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
                    <Text color="black" fontSize="12">
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
                    <Text color="white" fontSize="12">
                        Favorite Characters
                    </Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    )
}

export default Footer
