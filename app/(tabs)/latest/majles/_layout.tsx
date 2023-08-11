import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MajlesScreen = () => {
    const { majlesId } = useLocalSearchParams();

    return (
    <View>
        <Text>PoemScreen {majlesId}</Text>
    </View>
    )
}

export default MajlesScreen