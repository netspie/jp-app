import { authorize } from "@/auth/auth";
import SpyButton from "@/components/spy/SpyButton";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpySwitch from "@/components/spy/SpySwitch";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import { useClerk } from "@clerk/clerk-react";
import React from "react";
import { View } from "react-native";
import JPToolbar from "../JPToolbar";
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
      <SpyText className="w-full shrink">{props.children}</SpyText>
      <SpySwitch value={props.value} onValueChanged={props.onValueChanged} />
    </SpyView>
  );
};

const SettingsPage = () => {
  const authRes = authorize();
  if (authRes !== undefined) return authRes;

  const configStore = useConversationConfigStore();
  const { signOut } = useClerk()

  return (
    <SpySafeAreaView className="h-full bg-white">
      <JPToolbar addButton={false} />
      <SpyPageContent safe={false} className="bg-white">
        <SpyHeader>Settings</SpyHeader>
        <View className="gap-8">
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
          <SpyButton className="bg-secondary w-fit items-center" onPress={() => signOut()}>
            <SpyText className="text-white font-bold">Sign Out</SpyText>
          </SpyButton>
        </View>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default SettingsPage;
