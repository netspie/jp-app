import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import SpyButton from "@/components/spy/SpyButton";
import clsx from "clsx";

const ProjectForm = () => {
  const [name, setName] = useState("");

  return (
    <View className="flex flex-col h-full p-3 gap-2">
      <View className="gap-1">
        <Text className="text-xs">Project Name</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={setName}
          value={name}
        />
      </View>
      <SpyButton
        href="../"
        className="bg-primary-300 w-[100px]"
        textStyle={{ color: "white" }}
      >
        Create
      </SpyButton>
    </View>
  );
};

export default ProjectForm;
