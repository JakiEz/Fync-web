import { Pointer, Stores, useStore } from "fresh-store";
import { Button } from "../components/Button.tsx";
import { AccountStore } from "../utils/store/account.ts";

export default function Add(props: { ptr: Pointer }) {
  useStore(0, { pointer: props.ptr });

  const increment = () =>
    Stores
      .get<number>(props.ptr)
      ?.set((state) => state + 1);

  const decrement = () =>
    Stores
      .get<number>(props.ptr)
      ?.set((state) => state - 1);

  return (
    <div>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={increment}>+1</Button>
    </div>
  );
  //   useStore(0, { pointer: ptr });

  //   const savePersonalInfo = (name: string) => {
  //     console.log("setting personal info", name);
  //     Stores
  //       .get<AccountStore>(ptr)?.set((state) => ({
  //         ...state,
  //         personalInfo: {
  //           ...state.personalInfo,
  //           name,
  //           birthDate: "1999-01-01",
  //           phoneNumber: "0898765555",
  //           profilePicture: new File([""], "filename"),
  //         },
  //       }));
  //   };

  //   return (
  //     <div>
  //       <Button onClick={() => savePersonalInfo("hi")}>+1</Button>
  //     </div>
  //   );
}
