import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import { Text } from "react-native";
import SpyView from "@/components/spy/SpyView";

const CollectionPage = () => {
  return (
    <SpyPageContent>
      <Text className="font-bold text-3xl">Collection X</Text>
      <SpyView>
        <Text className="font-bold uppercase">Dialogues</Text>
        <SpyView>
          <SpyButton>Dialogue 1</SpyButton>
          <SpyButton>Dialogue 2</SpyButton>
          <SpyButton>Dialogue 3</SpyButton>
          <SpyButton>Dialogue 4</SpyButton>
        </SpyView>
      </SpyView>
    </SpyPageContent>
  );
};

export default CollectionPage;
