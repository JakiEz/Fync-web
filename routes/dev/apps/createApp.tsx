import { Button } from "@/components/Button.tsx";
import { FormInput } from "@/islands/PersonalForm.tsx";
import { Handlers } from "$fresh/server.ts";

interface AppDataForm {
  results: string[];
  query: string;
}

export const handler: Handlers = {
  POST(_, ctx) {
    console.log("get is working");
    return ctx.render();
  },
};

export default function ApplicationForm() {
  //   const { appName, description } = AppData;
  return (
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div className="p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 w-full max-w-md min-w-min m-4">
        <form class="flex flex-col gap-4 space-y-5" type="POST">
          <h1
            style={{ textAlign: "center", marginTop: 20 }}
            class="text-3xl font-bold text-white"
          >
            Application
          </h1>
          <div class="flex flex-col gap-2">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginLeft: 10, color: "white" }}>
                Application name
              </label>
              <input
                class={`shadow-md hover:shadow-lg m-2 py-2 px-4 rounded-lg`}
                label="application name"
                type="text"
                name="name"
                placeholder="google"
                required
              />
            </div>
            <textarea
              class={`shadow-md hover:shadow-lg m-2 py-2 px-4 rounded-lg pb-20`}
              label="description"
              type="text"
              placeholder="write about your app..."
              //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <Button type="submit">
            Next
          </Button>
        </form>
      </div>
    </div>
  );
}
