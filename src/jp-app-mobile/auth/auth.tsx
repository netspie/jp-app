import { Roles } from "@/types/globals";
import { useAuth, useUser } from "@clerk/clerk-expo";
import RedirectNormalUser from "./RedirectNormalUser";
import { Redirect } from "expo-router";

export const checkRole = (role: Roles) => {
  const { user } = useUser();

  return user?.publicMetadata?.role === role;
};

export const authorize = (role?: Roles) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/login" />;
  }

  if (role !== undefined && !checkRole(role)) {
    return <RedirectNormalUser />;
  }

  return undefined;
};
