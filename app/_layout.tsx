import React from 'react';
import { Stack } from 'expo-router';
import { Provider } from './context/auth';

const StackLayout: React.FC = () => {
    return (
        <Provider>
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        </Provider>
    );
};

export default StackLayout;
