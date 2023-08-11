import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PoemScreen = () => {
    const { poemId } = useLocalSearchParams();

    return (
    <View>
        <Text>PoemScreen {poemId}</Text>
    </View>
    )
}

export default PoemScreen