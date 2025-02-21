import { ScrollView, View } from "react-native";

export type HorizontalListProps = {
  children?: React.ReactNode;
};

const HorizontalList = (props: HorizontalListProps) => {
  return (
    <View className="">
      <ScrollView horizontal>
        <View className="flex flex-row gap-2">{props.children}</View>
      </ScrollView>
    </View>
  );
};

export default HorizontalList;