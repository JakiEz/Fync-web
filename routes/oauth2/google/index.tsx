import { Handlers } from "$fresh/server.ts";
import { WithSession } from "fresh-session";
import { googleAuthorizationURI } from "../../../denoGrant.ts";

export type Data = { session: Record<string, string> };

export const handler: Handlers<
  Data,
  WithSession // indicate with Typescript that the session is in the `ctx.state`
> = {
  async GET(req, ctx) {
    const uri = googleAuthorizationURI!;

    return new Response("", {
      status: 302,
      headers: { Location: uri },
    });
  },
  async POST(req, ctx) {
    // wait for profile and token from backend after oauth2
    const userData = await req.json();
    // save user data in session
    console.log(userData, "sdfxx");

    const { session } = ctx.state;
    session.set("createUser", userData);

    //redirect to create user page
    return new Response("", {
      status: 307,
      headers: { Location: "/account/create" },
    });
  },
};
