import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

type ExtendedUserType = {
  theme?: string;
  download_limit?: number;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export const useThemeController = () => {
  const { data } = useSession();
  const [userProps, setUserProps] = useState<ExtendedUserType>();
  useEffect(() => {
    setUserProps(data?.user);
  }, [data]);
  return {
    userProps,
    setUserProps,
  };
};
export const ThemeContext = createContext<
  ReturnType<typeof useThemeController>
>({
  userProps: { theme: "dark" },
  setUserProps: () => {},
});
