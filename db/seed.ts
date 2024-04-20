import { db, Reactions } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Reactions).values([
		{id: 1, title: 'first-post'},
		{id: 2, title: 'second-post'},
	])
}
