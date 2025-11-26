'use client'

import { createContext, Dispatch, SetStateAction } from "react";

export interface UserDetail  {
  id: string;
  name: string;
  email: string;
  points: number;
  subscription: null | string;
}

export interface UserDetailContextType {
  userDetail: UserDetail | undefined;
  setUserDetail: Dispatch<SetStateAction<UserDetail | undefined>>;
}

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: undefined,
  setUserDetail: () => {}
});