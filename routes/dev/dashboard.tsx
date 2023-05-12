import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { User } from "@/utils/type.ts";
import UserNavbar from "@/islands/UserNavbar.tsx";
import * as cookie from "https://deno.land/std@0.182.0/http/cookie.ts";
import { WithSession } from "fresh-session";
import { DevNavbar } from "../../components/DevNavbar.tsx";

type Data = {
  user: User;
};

export const handler: Handlers<Data, WithSession> = {
  GET(req, ctx) {
    const cookies = cookie.getCookies(req.headers);
    const { session } = ctx.state;

    console.log(session.data, "session");
    // const user = await ctx.state.db.collection("users").findOne({
    //   _id: ctx.state.session.get("userId"),
    // });
    const user = session.get("user");

    if (!user) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    return ctx.render({ user });
  },
};

export default function DashboardPage(props: PageProps<Data>) {
  const { data } = props;
  return (
    <>
      <DevNavbar user={data.user} />
      <div class="h-screen">
        {props.data.user
          ? (
            <div>
              {JSON.stringify(props.data.user)}
            </div>
          )
          : (
            <div>
              hell no
            </div>
          )}
      </div>
    </>
  );
}
