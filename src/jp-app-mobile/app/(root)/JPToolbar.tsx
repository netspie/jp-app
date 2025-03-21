import SpyBottomSheetModal from "@/components/spy/SpyBottomSheet";
import SpyBottomSheetTextInput from "@/components/spy/SpyBottomSheetTextInput";
import SpyButton from "@/components/spy/SpyButton";
import SpyDarkModeSwitch from "@/components/spy/SpyDarkModeSwitch";
import SpyIconButton from "@/components/spy/SpyIconButton";
import { useCurrentThemeColors } from "@/components/spy/themeHooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";

type JPToolbarProps = {
  addButton?: boolean;
};

const JPToolbar = (props: JPToolbarProps) => {
  const { currentThemeColors, appColorScheme } = useCurrentThemeColors();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();

  return (
    <>
      <View className="relative flex-row gap-2 items-center justify-end mx-2 mb-2">
        <View className="relative flex-row gap-2 flex-grow">
          {navigation.canGoBack() && (
            <SpyIconButton
              className="bg-none justify-self-start"
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color={"black"} />
            </SpyIconButton>
          )}
        </View>
        {/* <SpyDarkModeSwitch
          mainColor={
            appColorScheme === "light"
              ? currentThemeColors.secondary
              : currentThemeColors.primary
          }
          disabledColor={currentThemeColors.greyLight}
        /> */}
        {/* {(props.addButton === undefined || props.addButton === true) && (
          <SpyIconButton
            className="bg-secondary"
            onPress={() => bottomSheetModalRef.current?.present()}
          >
            <Ionicons name="add" size={20} color={"white"} />
          </SpyIconButton>
        )} */}
        {/* <SpyIconButton className="bg-yellow-400">
          <Ionicons name="diamond" size={20} color={"white"} />
        </SpyIconButton> */}
      </View>
      <SpyBottomSheetModal ref={bottomSheetModalRef} className="gap-4 pb-12">
        <SpyBottomSheetTextInput label="Name" />
        <SpyButton>Submit</SpyButton>
      </SpyBottomSheetModal>
    </>
  );
};

export default JPToolbar;
