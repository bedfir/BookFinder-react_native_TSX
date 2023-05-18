import React from 'react';
import { View, Text } from 'react-native';
import { Stack, useSearchParams } from 'expo-router';

const DetailsPage: React.FC = () => {
    const { id } = useSearchParams();

    return (
        <View>
        <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
        <Text>My Details for: {id}</Text>
        </View>
    );
};

export default DetailsPage;
