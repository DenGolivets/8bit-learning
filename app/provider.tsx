"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetail, UserDetailContext } from "@/context/userDetailContext";

const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail | undefined>(
    undefined
  );

  const createNewUser = useCallback(async () => {
    const result = await axios.post("/api/user", {});
    setUserDetail(result?.data);
  }, []);

  useEffect(() => {
    user && createNewUser();
  }, [user, createNewUser]);

  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
};

export default Provider;
