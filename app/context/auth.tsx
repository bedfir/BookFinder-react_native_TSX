import { useRouter, useSegments } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../../models/user/user";

interface AuthContextValue {
    signIn: (user: User) => void;
    signOut: () => void;
    user: User | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

function useProtectedRoute(user: User | null): void {
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
    const [user, setAuth] = useState<User | null>(null);

    useProtectedRoute(user);

    const signIn = (user: User) => {
        setAuth(user);
    };

    const signOut = () => {
        setAuth(null);
    };

    const value: AuthContextValue = {
        signIn,
        signOut,
        user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
