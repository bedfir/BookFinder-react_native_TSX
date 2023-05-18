import React from 'react';
import { Stack } from 'expo-router';

const Layout: React.FC = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        />
    );
};

export default Layout;
