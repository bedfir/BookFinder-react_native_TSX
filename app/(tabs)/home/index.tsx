import React from 'react';
import { View, Text } from 'react-native';
import Maps from '../../components/maps';

const Home: React.FC = () => {
    const coordinates = [
        { latitude: 37.78825, longitude: -122.4324 },
        { latitude: 37.7749, longitude: -122.4194 },
    ];
    return (
        <View>
            <Text>Home</Text>
            <Maps coordinates={coordinates}/>
        </View>
    );
};

export default Home;
