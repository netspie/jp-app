import React from "react";
import SpyStack from "@/components/spy/SpyStack";
import SpyStackScreen from "@/components/spy/SpyStackScreen";

const RootLayout = () => {
  return (
    <SpyStack top>
      <SpyStackScreen name="index" />
    </SpyStack>
  );
};

export default RootLayout;
