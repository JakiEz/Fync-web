import { makeStore, useStore } from "statery";
import { z } from "zod";
import { CreateEmailUser, CreateGoogleUser, User } from "../type.ts";

export type AccountStore = {
  user?: User;
  authUser?: CreateEmailUser | CreateGoogleUser;
  personalInfo?: PersonalInfo;
  accountInfo?: AccountInfo;
  provider: string;
};

export const personalInfoParser = z.object({
  name: z.string(),
  username: z.string(),
  phoneNumber: z.string(),
  profilePicture: z.custom<File>((value) => value instanceof File),
  birthDate: z.string(),
  avatar: z.string().optional(),
});
export type PersonalInfo = z.infer<typeof personalInfoParser>;
export type AccountInfo = {
  email: string;
  password: string;
};
