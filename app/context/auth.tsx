import { useRouter, useSegments } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextValue {
    signIn: () => void;
    signOut: () => void;
    user: any;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

function useProtectedRoute(user: any): void {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";

        if (!user && !inAuthGroup) {
        // If the user is not signed in and the initial segment is not in the auth group.
        router.replace("/(auth)/sign-in");
        } else if (user && inAuthGroup) {
        // If the user is signed in and the initial segment is in the auth group.
        router.replace("/");
        }
    }, [user, segments, router]);
}

interface ProviderProps {
    children: React.ReactNode;
}

export function Provider({ children }: ProviderProps): JSX.Element {
    const [user, setAuth] = useState<any>(null);

    useProtectedRoute(user);

    const value: AuthContextValue = {
        signIn: () => setAuth({}),
        signOut: () => setAuth(null),
        user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
