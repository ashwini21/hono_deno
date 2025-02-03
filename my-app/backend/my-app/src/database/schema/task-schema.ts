import {
    boolean,
    foreignKey,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
  } from "drizzle-orm/pg-core";
  import { z } from '@hono/zod-openapi';
  import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
  
  //schema defination
  export const tasks = pgTable('tasks', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    done: boolean()
    .default(false)
  });

  //select schema record
  export const taskSelectSchema = createSelectSchema(tasks);
export const idParamsSchema = z.object({
  id: z.coerce.number().openapi({
    param: {
      name: "id",
      in: "path",
      required: true,
    },
    required: ["id"],
    example: 42,
  }),
});

export const taskInsertSchema = z.object({
            name: z.string().min(1), 
            done: z.boolean().optional(),     
          })
export const taskPatchSchema = z.object({
  name: z.string().min(1).optional(),
  done: z.boolean().optional(),
});

 