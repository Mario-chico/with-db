import type { APIRoute } from "astro";
import { Reactions, db, eq } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({request}) => {
  const {slug, fire} = await request.json();
console.log('Si me estoy ejecutando');
  if(!slug) {
    return new Response(null, {
      status: 404,
      statusText: "slig falta"
    });
  }
  if(!fire) {
    return new Response(null, {
      status: 404,
      statusText: "falta fire"
    });
  }
  const fireLike = await db.select().from(Reactions).where(eq(Reactions.slug, slug)).get()
  console.log('Si me estoy ejecutando');
  const update = db.update(Reactions).set({fire: (fireLike?.fire ?? 0) +1}).where(eq(Reactions.slug, slug)).returning().get();
  return new Response(JSON.stringify(update), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  
};