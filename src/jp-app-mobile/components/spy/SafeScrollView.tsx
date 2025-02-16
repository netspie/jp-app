import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeScrollViewProps = {
  children?: React.ReactNode;
  className?: string;
  scrollViewClassName?: string;
};

const SafeScrollView = (props: SafeScrollViewProps) => {
  return (
    <SafeAreaView
      className={`relative flex-col bg-white w-full h-full p-3 ${props.className}`}
    >
      <ScrollView
        contentContainerClassName={`h-full w-full gap-2 ${props.scrollViewClassName}`}
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeScrollView;
