import { db, Reactions } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Reactions).values([
		{slug: "markdown-style-guide", fire: 1},
		{slug: "using-mdx", fire: 1},
	])
}
