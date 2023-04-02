import { Observer, type Pointer, Store, Stores, useStore } from "fresh-store";
import { z } from "zod";
import { CreateEmailUser, CreateGoogleUser, User } from "@/utils/type.ts";

export type AccountStore = {
  user?: User;
  authUser?: CreateEmailUser | CreateGoogleUser;
  personalInfo?: PersonalInfo;
  accountInfo?: AccountInfo;
  provider: string;
};

export const personalInfoParser = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  profilePicture: z.custom<File>((value) => value instanceof File),
  birthDate: z.string(),
  avatar: z.string().optional(),
});

export type PersonalInfo = z.infer<typeof personalInfoParser>;
export type AccountInfo = {
  username: string;
  email: string;
  password: string;
};

// const store = makeStore<AccountStore>({
//   user: {} as AccountStore["user"],
//   authUser: {} as AccountStore["authUser"],
//   personalInfo: {} as AccountStore["personalInfo"],
//   accountInfo: {} as AccountStore["accountInfo"],
//   provider: "",
// });

// export const savePersonalInfo = (info: PersonalInfo) => {
//   console.log("setting personal info", info);
//   store.set((state: AccountStore) => ({
//     personalInfo: {
//       ...state.personalInfo,
//       ...info,
//     },
//   }));
// };

// Stores.get<string>(ptr)?.set("Modified Value");

export const accountPtr = useStore({} as AccountStore, {
  onChange: (state) => console.log("changin acptr", state),
});

// class AccountObserver implements Observer<AccountStore> {
//   public update(subject: Store<AccountStore>): void {
//     console.log("The store was updated, new state: ", subject.state);
//   }
// }

export const savePersonalInfo = (info: PersonalInfo) => {
  console.log("setting personal info", info);
  Stores
    .get<AccountStore>(accountPtr)?.set((state) => ({
      ...state,
      personalInfo: {
        ...state.personalInfo,
        ...info,
      },
    }));
};
