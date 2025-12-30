import { integer, json, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points: integer().default(0),
  subscription: varchar()
});

export const courseTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull().unique(),
  title: varchar().notNull(),
  desc: varchar().notNull(),
  bannerImage: varchar().notNull(),
  level: varchar().default("Beginner"),
  tags: varchar()
});

export const courseChaptersTable = pgTable("courseChapters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  chapterId: integer(),
  courseId: integer().notNull(),
  name: varchar(),
  desc: varchar(),
  exercises: json(),
});

export const enrolledCourseTable = pgTable("enrollCourse", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  userId: varchar(),
  enrolledDate: timestamp().defaultNow(),
  xpEarned: integer(),
});

export const completedExerciseTable = pgTable("complitedExercise", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  chapterId: integer(),
  exerciseId: integer(),
  userId: varchar(),
});

export const exerciseTable = pgTable("exercise", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  chapterId: integer(),
  exerciseId: varchar(),
  exercisesContent: json(),
  exerciseName: varchar(),
});