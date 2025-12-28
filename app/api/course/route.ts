import { db } from "@/config/db";
import {
  completedExerciseTable,
  courseChaptersTable,
  courseTable,
  enrolledCourseTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, asc, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const user = await currentUser();

  if (courseId) {
    const res = await db
      .select()
      .from(courseTable)
      .where(eq(courseTable.courseId, Number(courseId)));

    const chapterResult = await db
      .select()
      .from(courseChaptersTable)
      .where(eq(courseChaptersTable.courseId, Number(courseId)));

    const enrolledCourse = await db
      .select()
      .from(enrolledCourseTable)
      //@ts-ignore
      .where(and(eq(enrolledCourseTable?.courseId, courseId),eq(enrolledCourseTable.userId,user?.primaryEmailAddress?.emailAddress)));

    const isEnrolledCourse = enrolledCourse?.length > 0 ? true : false;

    const completedExercise = await db.select().from(completedExerciseTable)
      //@ts-ignore
      .where(and(eq(completedExerciseTable.courseId, courseId),eq(completedExerciseTable.userId, user?.primaryEmailAddress?.emailAddress)))
      .orderBy(desc(completedExerciseTable?.courseId), desc(completedExerciseTable?.exerciseId))

    return NextResponse.json({
      ...res[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0],
      completedExercise: completedExercise,
    });
  } else {
    const result = await db.select().from(courseTable).orderBy(asc(courseTable.id));

    return NextResponse.json(result);
  }
}
