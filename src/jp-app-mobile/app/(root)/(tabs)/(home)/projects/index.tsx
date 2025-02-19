import React, { useCallback, useRef, useState } from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import SpyEditableList from "@/components/spy/SpyEditableList";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpyBottomSheetModal from "@/components/spy/SpyBottomSheet";
import SpyBottomSheetTextInput from "@/components/spy/SpyBottomSheetTextInput";
import SpyIconButton from "@/components/spy/SpyIconButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppColorScheme } from "@/components/spy/useAppColorScheme";

type ProjectViewProps = {
  title: string;
  author?: string;
  icon: React.ReactNode;
};

const ProjectView = (props: ProjectViewProps) => {
  return (
    <SpyButton
      href="/(root)/(tabs)/(home)/project/1"
      className="w-full flex-row border rounded-md p-4 gap-6"
      style={{ backgroundColor: "transparent" }}
    >
      {props.icon}
      <View className="gap-1">
        <Text className="font-bold">{props.title}</Text>
        {props.author && <Text className="text-black-100">{props.author}</Text>}
      </View>
    </SpyButton>
  );
};

const ProjectsPage = () => {
  const isLarge = useIsLargeScreen();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { toggleAppColorScheme } = useAppColorScheme();

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View className="flex-row gap-2 justify-end mx-2 mb-2">
          <SpyIconButton onPress={handlePresentModalPress}>
            <Ionicons name="add" size={20} color={"white"} />
          </SpyIconButton>
          <SpyIconButton className="bg-[#d4af37]">
            <Ionicons name="bag" size={20} color={"white"} />
          </SpyIconButton>
        </View>
        <SpyPageContent safe={false}>
          <SpyIconButton onPress={toggleAppColorScheme}>
            <Ionicons name="partly-sunny" size={20} />
          </SpyIconButton>
          <Text className="text-primary">This is primary text</Text>
          <Text className="text-secondary">This is secondary text</Text>
          <View className="">
            <ScrollView horizontal>
              <View className="flex flex-row gap-2">
                <SpyButton
                  className="w-fit bg-[#593EA2]"
                  textStyle={{ color: "white" }}
                >
                  My
                </SpyButton>
                <SpyButton
                  className="w-fit border border-black"
                  style={{ backgroundColor: "white" }}
                >
                  Public
                </SpyButton>
                <SpyButton
                  className="w-fit border border-black"
                  style={{ backgroundColor: "white" }}
                >
                  Shared
                </SpyButton>
              </View>
            </ScrollView>
          </View>
          <SpyEditableList
            createHref="/projects/create"
            createButtonShown={false}
          >
            <ProjectView
              title="Yuta Vocabulary Course"
              author="Yuta Aoki"
              icon={<Ionicons name="library" size={36} color={"#593EA2"} />}
            />
            <ProjectView
              title="Yuta Real Life Japanese Course"
              author="Yuta Aoki"
              icon={<Ionicons name="library" size={36} color={"#593EA2"} />}
            />
            <ProjectView
              title="Misa Ammo YT Videos"
              author="Misa Ammo"
              icon={<Ionicons name="flower" size={36} color={"#AA336A"} />}
            />
          </SpyEditableList>
          <SpyBottomSheetModal
            ref={bottomSheetModalRef}
            className="gap-4 pb-12"
          >
            <SpyBottomSheetTextInput label="Name" />
            <SpyButton>Submit</SpyButton>
          </SpyBottomSheetModal>
        </SpyPageContent>
      </View>
    </SafeAreaView>
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
