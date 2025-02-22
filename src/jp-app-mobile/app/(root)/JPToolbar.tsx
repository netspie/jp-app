import SpyBottomSheetModal from "@/components/spy/SpyBottomSheet";
import SpyBottomSheetTextInput from "@/components/spy/SpyBottomSheetTextInput";
import SpyButton from "@/components/spy/SpyButton";
import SpyDarkModeSwitch from "@/components/spy/SpyDarkModeSwitch";
import SpyIconButton from "@/components/spy/SpyIconButton";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View } from "react-native";

type JPToolbarProps = {
  addButton?: boolean;
};

const JPToolbar = (props: JPToolbarProps) => {
  const { currentThemeColors, appColorScheme } = useCurrentThemeColors();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <View className="relative flex-row gap-2 justify-end mx-2 mb-2">
        <SpyDarkModeSwitch
          mainColor={
            appColorScheme === "light"
              ? currentThemeColors.secondary
              : currentThemeColors.primary
          }
          disabledColor={currentThemeColors.greyLight}
        />
        {(props.addButton === undefined || props.addButton === true) && (
          <SpyIconButton
            className="bg-secondary"
            onPress={() => bottomSheetModalRef.current?.present()}
          >
            <Ionicons name="add" size={20} color={"white"} />
          </SpyIconButton>
        )}
        <SpyIconButton className="bg-yellow-400">
          <Ionicons name="diamond" size={20} color={"white"} />
        </SpyIconButton>
      </View>
      <SpyBottomSheetModal ref={bottomSheetModalRef} className="gap-4 pb-12">
        <SpyBottomSheetTextInput label="Name" />
        <SpyButton>Submit</SpyButton>
      </SpyBottomSheetModal>
    </>
  );
};

export default JPToolbar;
