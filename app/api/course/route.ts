import { db } from "@/config/db";
import {
  courseChaptersTable,
  courseTable,
  enrolledCourseTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
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
      .where(and(eq(enrolledCourseTable?.courseId, courseId),eq(enrolledCourseTable.userId, user?.primaryEmailAddress?.emailAddress)));

    const isEnrolledCourse = enrolledCourse?.length > 0 ? true : false;

    return NextResponse.json({
      ...res[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0],
    });
  } else {
  }

  const result = await db.select().from(courseTable);

  return NextResponse.json(result);
}
