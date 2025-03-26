import { useAuth } from "@clerk/clerk-react";
import { useReactQueryDevTools } from "@dev-plugins/react-query/build/useReactQueryDevTools";
import { router, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import queryClient from "../queryClient";
import LoginPage from "./login";
import CollectionsLayout from "./(tabs)/(home)/collections/_layout";

const InitialLayout = () => {
  useReactQueryDevTools(queryClient);

  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <ActivityIndicator />;
  }

  if (!isSignedIn) {
    return <LoginPage />;
  }

  const isAdmin = false;
  if (!isAdmin) {
    return <CollectionsLayout /> 
  } 

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default InitialLayout;
