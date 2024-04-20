import { defineDb, column, defineTable } from 'astro:db';

const Reactions = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    title: column.text(),
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Reactions }
});
