import { Pointer, Stores, useStore } from "fresh-store";
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { accountPtr, AccountStore } from "../utils/store/account.ts";

export default function StoreData(props: { ptr: Pointer }) {
  const [counter, setCounter] = useState(0);
  useStore(counter, {
    pointer: props.ptr,
    onChange: (newState) => setCounter(newState),
  });

  return <p>Counter: {counter}</p>;
  //   const [accountState, setAccountState] = useState({} as AccountStore);
  //   useStore(accountState, {
  //     pointer: props.ptr,
  //     onChange: (newState: AccountStore) => setAccountState(newState),
  //   });

  //   return (
  //     <div
  //       class="text-white"
  //       onClick={() => console.log(Stores.get(accountPtr)?.state)}
  //     >
  //       {JSON.stringify(accountState)}
  //       <Button
  //         onClick={() => console.log("hi", Stores.get(accountPtr)?.state)}
  //       >
  //         Log
  //       </Button>
  //     </div>
  //   );
}
