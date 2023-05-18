import { Stack } from "expo-router"
import React from "react";

const StackLayout: React.FC = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: 'Home Screen'}} />
        </Stack>
    )
}

export default StackLayout;