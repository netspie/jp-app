import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import React from "react";
import { useWindowDimensions } from "react-native";
import JPToolbar from "../JPToolbar";
import SpyView from "@/components/spy/SpyView";
import SpySwitch from "@/components/spy/SpySwitch";
import SpyText from "@/components/spy/SpyText";
import { useConversationConfigStore } from "./(home)/dialogues/conversationConfigStore";

type SettingSwitchProps = {
  iconCharacter: string;
  children: string;
  value: boolean;
  onValueChanged: (value: boolean) => void;
};

const SettingSwitch = (props: SettingSwitchProps) => {
  return (
    <SpyView row className="w-full items-center">
      <SpyText className="w-10 text-lg font-bold text-secondary">
        {props.iconCharacter}
      </SpyText>
      <SpyText className="w-full shrink">
        {props.children}
      </SpyText>
      <SpySwitch value={props.value} onValueChanged={props.onValueChanged} />
    </SpyView>
  );
};

const SettingsPage = () => {
  const configStore = useConversationConfigStore();

  return (
    <SpySafeAreaView>
      <JPToolbar addButton={false} />
      <SpyPageContent safe={false}>
        <SpyHeader>Settings</SpyHeader>
        <SpyView className="gap-4">
          <SettingSwitch
            iconCharacter="人"
            value={configStore.isSpeakersVisible}
            onValueChanged={configStore.setSpeakersVisible}
          >
            Speakers
          </SettingSwitch>
          <SettingSwitch
            iconCharacter="あ"
            value={configStore.isNativeVisible}
            onValueChanged={configStore.setNativeVisible}
          >
            Japanese
          </SettingSwitch>
          <SettingSwitch
            iconCharacter="〻"
            value={configStore.isFuriganaVisible}
            onValueChanged={configStore.setFuriganaVisible}
          >
            Furigana
          </SettingSwitch>
          <SettingSwitch
            iconCharacter="A"
            value={configStore.isTranslationsVisible}
            onValueChanged={configStore.setTranslationsVisible}
          >
            Translations
          </SettingSwitch>
          <SettingSwitch
            iconCharacter="W"
            value={configStore.isVocabularyVisible}
            onValueChanged={configStore.setVocabularyVisible}
          >
            Vocabulary
          </SettingSwitch>
          {configStore.isVocabularyVisible && (
            <>
              <SettingSwitch
                iconCharacter="W-"
                value={configStore.isLineVocabularyVisible}
                onValueChanged={configStore.setLineVocabularyVisible}
              >
                Vocabulary Per Line
              </SettingSwitch>
              <SettingSwitch
                iconCharacter="W*"
                value={configStore.isAllVocabularyVisible}
                onValueChanged={configStore.setAllVocabularyVisible}
              >
                All Vocabulary
              </SettingSwitch>
            </>
          )}
        </SpyView>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default SettingsPage;
