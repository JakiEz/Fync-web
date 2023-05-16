import { PageProps } from "$fresh/server.ts";
import { bold } from "https://esm.sh/v120/picocolors@1.0.0/esnext/picocolors.mjs";
import { DevNavbar } from "@/components/DevNavbar.tsx";
import { Button } from "../../../components/Button.tsx";

export default function Greet(props: PageProps) {
  console.log(props.params, props.url);
  return (
    <>
      <DevNavbar />
      <div class="h-screen p-4 mx-auto ">
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            height: 30,
            marginTop: 50,
          }}
        >
          <text
            style={{ fontSize: 50, color: "white", fontWeight: "bold" }}
          >
            Application
          </text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button style={{ marginTop: 50 }}>
              <a href="http://localhost:8000/dev/apps/createApp">
                create application
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
