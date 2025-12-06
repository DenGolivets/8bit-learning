import { db } from "@/config/db";
import { courseChaptersTable } from "@/config/schema";
import { chapstersData } from "@/data/chapters";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  chapstersData.forEach(async (item) => {
    await db.insert(courseChaptersTable).values({
      courseId: 2,
      chapterId: item?.id,
      desc: item?.desc,
      name: item?.name,
      exercises: item.exercises
    })
  })

  return NextResponse.json('Success');
}