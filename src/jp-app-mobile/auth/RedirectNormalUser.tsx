import { Redirect } from "expo-router";
import React from "react";

function RedirectNormalUser() {
  return <Redirect href="/(root)/(tabs)/(home)/collections/public-1" />;
}

export default RedirectNormalUser;
