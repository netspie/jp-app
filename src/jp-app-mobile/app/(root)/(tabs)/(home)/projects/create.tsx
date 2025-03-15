import SpyButton from "@/components/spy/SpyButton";
import SpyText from "@/components/spy/SpyText";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

const ProjectForm = () => {
  const [name, setName] = useState("");

  return (
    <View className="flex flex-col h-full p-3 gap-2">
      <View className="gap-1">
        <SpyText className="text-xs">Project Name</SpyText>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={setName}
          value={name}
        />
      </View>
      <SpyButton
        href="../"
        className="bg-primary w-[100px]"
        textStyle={{ color: "white" }}
      >
        Create
      </SpyButton>
    </View>
  );
};

export default ProjectForm;
