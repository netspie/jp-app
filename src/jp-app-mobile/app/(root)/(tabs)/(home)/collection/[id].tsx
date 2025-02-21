import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import { Text } from "react-native";
import SpyView from "@/components/spy/SpyView";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import JPToolbar from "@/app/(root)/JPToolbar";
import SpyHeader from "@/components/spy/SpyHeader";

const CollectionPage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyHeader>Collection 8</SpyHeader>
      <SpyPageContent safe={false}>
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
    </SpySafeAreaView>
  );
};

export default CollectionPage;
