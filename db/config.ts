import { defineDb, column, defineTable } from 'astro:db';

const Reactions = defineTable({
  columns: {
    slug: column.text({primaryKey: true}),
    like: column.number({default: 0}),
    fire: column.number({default: 1}),
    thumbDown: column.number({default: 0}),
    rocket: column.number({default: 0}),
    
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Reactions }
});
