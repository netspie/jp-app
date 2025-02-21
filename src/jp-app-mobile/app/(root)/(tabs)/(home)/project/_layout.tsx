import React from "react";
import SpyStack from "@/components/spy/SpyStack";
import SpyStackScreen from "@/components/spy/SpyStackScreen";

const RootLayout = () => {
  return (
    <SpyStack>
      <SpyStackScreen name="[id]" />
    </SpyStack>
  );
};

export default RootLayout;
