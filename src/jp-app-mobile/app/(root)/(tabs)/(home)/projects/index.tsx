import React, { useCallback, useRef } from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import SpyEditableList from "@/components/spy/SpyEditableList";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProjectsPage = () => {
  const isLarge = useIsLargeScreen();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SpyPageContent>
      <SpyEditableList title="Projects" createHref="/projects/create">
        <SpyButton href="/(root)/(tabs)/(home)/project/1">Project 1</SpyButton>
      </SpyEditableList>
      <SpyEditableList title="Boba" createHref="/projects/create">
        <SpyButton href="/(root)/(tabs)/(home)/project/1">Project 1</SpyButton>
      </SpyEditableList>
      <SpyButton className="bg-primary-300" onPress={handlePresentModalPress}>Open</SpyButton>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        handleStyle={{
          backgroundColor: "#F4F5F5",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}
        style={{}}
      >
        <BottomSheetView
          style={{
            padding: 12,
            paddingTop: 0,
            paddingBottom: 36,
            backgroundColor: "#F4F5F5",
          }}
        >
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
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
