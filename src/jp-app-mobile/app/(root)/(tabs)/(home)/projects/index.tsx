import React, { useCallback, useRef } from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import SpyEditableList from "@/components/spy/SpyEditableList";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpyBottomSheetModal from "@/components/spy/SpyBottomSheet";
import SpyBottomSheetTextInput from "@/components/spy/SpyBottomSheetTextInput";
import SpyIconButton from "@/components/spy/SpyIconButton";
import SpyDarkModeSwitch from "@/components/spy/SpyDarkModeSwitch";
import SpyText from "@/components/spy/SpyText";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";

type ProjectViewProps = {
  title: string;
  author?: string;
  icon: React.ReactNode;
};

const ProjectView = (props: ProjectViewProps) => {
  return (
    <SpyButton
      href="/(root)/(tabs)/(home)/project/1"
      className="w-full flex-row rounded-md p-4 gap-6 bg-grey-light"
    >
      {props.icon}
      <View className="gap-1">
        <SpyText className="font-bold">{props.title}</SpyText>
        {props.author && (
          <SpyText>{props.author}</SpyText>
        )}
      </View>
    </SpyButton>
  );
};

const ProjectsPage = () => {
  const isLarge = useIsLargeScreen();
  const { currentThemeColors } = useCurrentThemeColors();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SpySafeAreaView>
      <View>
        <View className="flex-row gap-2 justify-end mx-2 mb-2">
          <SpyDarkModeSwitch
            mainColor={currentThemeColors.secondary}
            disabledColor={currentThemeColors.greyLight}
          />
          <SpyIconButton
            className="bg-secondary"
            onPress={handlePresentModalPress}
          >
            <Ionicons name="add" size={20} color={"white"} />
          </SpyIconButton>
          <SpyIconButton className="bg-yellow-500">
            <Ionicons name="bag" size={20} color={"white"} />
          </SpyIconButton>
        </View>
        <SpyPageContent safe={false}>
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
    </SpySafeAreaView>
  );
};

export default ProjectsPage;
