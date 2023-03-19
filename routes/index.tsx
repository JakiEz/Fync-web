import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { Navbar } from "../components/Navbar.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div class="h-screen p-4 mx-auto ">
        <div class="flex items-center self-center ml-auto mr-auto justify-center h-800 flex-col max-w-xl ">
          <h1 class="text-6xl font-extrabold text-transparent md:text-7xl lg:text-8xl max-w-2xl m-4  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Develop Friendships Everywhere
          </h1>
          <div class="self-start">
            <Button href="/start">Get started</Button>
            <Button href="/learn" variant="secondary">learn more</Button>
          </div>
        </div>

        {
          /* <a href="/oauth2/login" class="text-blue-500">
          <h2>login</h2>
        </a> */
        }
      </div>
    </>
  );
}
