import React from "react";
import SpyStack from "@/components/spy/SpyStack";
import SpyStackScreen from "@/components/spy/SpyStackScreen";

const RootLayout = () => {
  return (
    <SpyStack>
      <SpyStackScreen name="index" />
      <SpyStackScreen name="[id]" />
      <SpyStackScreen name="create" options={{ presentation: "modal" }} />
    </SpyStack>
  );
};

export default RootLayout;
