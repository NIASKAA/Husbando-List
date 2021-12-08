import React from 'react'
import {
    Spinner,
    VStack,
    Heading,
    Center,
    NativeBaseProvider,
  } from "native-base"

const SplashView = () => {

    return (
        <VStack space={4} alignItems="center">
            <Spinner size="lg" />
        </VStack>
    )
}

export default SplashView
