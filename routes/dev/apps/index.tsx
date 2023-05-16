import { PageProps } from "$fresh/server.ts";
import { bold } from "https://esm.sh/v120/picocolors@1.0.0/esnext/picocolors.mjs";
import { DevNavbar } from "@/components/DevNavbar.tsx";

export default function Greet(props: PageProps) {
  console.log(props.params, props.url);
  return (
    <>
      <DevNavbar />
      <div class="h-screen p-4 mx-auto ">
      </div>
    </>
  );
}
