import SpyButton from "@/components/spy/SpyButton";
import SpyIconButton from "@/components/spy/SpyIconButton";
import SpyText from "@/components/spy/SpyText";
import { useSSO } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const signIn = async (strategy: "oauth_google" | "oauth_apple") => {
    try {
      const { createdSessionId, setActive, signUp } = await startSSOFlow({
        strategy,
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1 bg-white justify-center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View className="w-full items-center gap-8 max-w-md mx-auto">
          <Image
            source={require("@/assets/images/red-sun.webp")}
            style={{
              width: "100%",
              height: 400,
              aspectRatio: 1,
            }}
            resizeMode="contain"
          />
          <SpyText className="text-3xl font-bold text-primary mb-2">
            Your Journey Starts Here
          </SpyText>
          <View className="w-full gap-3 px-8">
            <SpyButton
              className="flex-row items-center justify-center gap-4"
              onPress={() => signIn("oauth_apple")}
            >
              <Ionicons name="logo-apple" size={24} color="black" />
              <SpyText>Continue with Apple</SpyText>
            </SpyButton>
            <SpyButton
              className="flex-row items-center justify-center gap-4"
              onPress={() => signIn("oauth_google")}
            >
              <Ionicons name="logo-google" size={24} color="orangered" />
              <SpyText>Continue with Google</SpyText>
            </SpyButton>
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginPage;
