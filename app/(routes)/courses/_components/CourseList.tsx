"use client";

import axios from "axios";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type CourseType = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  bannerImage: string;
  level: string;
  tags: string;
  chapters?: Chapter[];
  userEnrolled?: boolean;
  courseEnrolledInfo?: CourseEnrolledInfo;
};

export type CourseEnrolledInfo = {
  xpEarned: number;
  enrolledDate: any;
};

export type Chapter = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  id: number;
  exercises: Exercise[];
};

export type Exercise = {
  name: string;
  slug: string;
  xp: number;
  difficulty: string;
};

const CourseList = () => {
  const [courseList, setCourseList] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllCourses = async () => {
    setLoading(true);
    const res = await axios.get("/api/course");
    setCourseList(res?.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
      {courseList?.map((course) => (
        <Link key={course?.id} href={"/courses/" + course?.courseId}>
          <div className="border-4 rounded-xl hover:bg-zinc-900 cursor-pointer">
            <Image
              src={(course?.bannerImage).trimEnd()}
              alt={course?.title}
              width={400}
              height={400}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-game">{course?.title}</h2>
              <p className="font-game text-xl text-gray-400 line-clamp-2">
                {course?.desc}
              </p>
              <h2 className="bg-zinc-800 gap-2 font-game p-1 px-4 mt-3 rounded-2xl items-center inline-flex">
                <ChartNoAxesColumnIncreasingIcon className="size-4" />
                {course?.level}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
