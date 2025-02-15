import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Dialogue = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Dialogue {id}</Text>
    </View>
  );
};

export default Dialogue;
