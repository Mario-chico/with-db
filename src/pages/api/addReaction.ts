import type { APIRoute } from "astro";
import { Reactions, db } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({request}) => {
  const {slug} = await request.json();

  if(!slug) {
    return new Response(null, {
      status: 404,
      statusText: "Nombre no"
    });
  }
  const req = await db.insert(Reactions).values({slug});

  return new Response(JSON.stringify({ success: true}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};