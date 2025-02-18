import React, { useCallback, useRef, useState } from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import SpyEditableList from "@/components/spy/SpyEditableList";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Button, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { SearchBar } from "react-native-screens";
import SpyBottomSheetModal from "@/components/spy/SpyBottomSheet";
import SpyBottomSheetTextInput from "@/components/spy/SpyBottomSheetTextInput";

const ProjectsPage = () => {
  const isLarge = useIsLargeScreen();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SpyPageContent>
      <View className="flex-row gap-4 justify-end">
        <SpyButton
          onPress={handlePresentModalPress}
          className={`bg-primary-300 p-0 m-0`}
        >
          <Ionicons name="add" size={20} color={"white"} />
        </SpyButton>
      </View>
      <SpyEditableList
        title="Boba"
        createHref="/projects/create"
        createButtonShown={false}
      >
        <SpyButton href="/(root)/(tabs)/(home)/project/1">Project 1</SpyButton>
      </SpyEditableList>
      <SpyBottomSheetModal ref={bottomSheetModalRef} className="gap-4 pb-12">
          <SpyBottomSheetTextInput label="Name" />
          <SpyButton>Submit</SpyButton>
      </SpyBottomSheetModal>
    </SpyPageContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default ProjectsPage;
