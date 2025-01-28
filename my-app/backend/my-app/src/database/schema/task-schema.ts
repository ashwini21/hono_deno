import {
    boolean,
    foreignKey,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
  } from "drizzle-orm/pg-core";
  
  
  import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
  
  //schema defination
  export const tasks = pgTable('tasks', {
    id: integer().generatedAlwaysAsIdentity().primaryKey(),
    name: text().notNull(),
    done: boolean().default(false)
  });

  //select schema record
  export const taskSelectSchema = createSelectSchema(tasks);

  //create schema record
  export const taskInsertSchema = createInsertSchema(tasks, { name: schema => schema.name.min(1) })
    .required({ name: true })
    .omit({ id: true });
  
 