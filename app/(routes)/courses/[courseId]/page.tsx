"use client";

import { useParams } from "next/navigation";
import CourseDetailBanner from "./_components/CourseDetailBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { CourseType } from "../_components/CourseList";
import CourseChapters from "./_components/CourseChapters";
import CourseStatus from "./_components/CourseStatus";
import UpgradeToPro from "../../_components/UpgradeToPro";
import CommunityHelpSection from "./_components/CommunityHelpSection";

const CoursePage = () => {
  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState<CourseType>();
  const [loading, setLoading] = useState(false);

  const getCourseDetail = async () => {
    setLoading(true);
    const res = await axios.get("/api/course?courseId=" + courseId);
    console.log(res.data);
    setCourseDetail(res?.data);
    setLoading(false);
  };

  useEffect(() => {
    getCourseDetail();
  }, [courseId]);

  return (
    <div>
      <CourseDetailBanner
        loading={loading}
        courseDetail={courseDetail}
        refreshData={() => getCourseDetail()}
      />
      <div className="grid grid-cols-3 p-10 md:px-24 lg:px-36 gap-7">
        <div className="col-span-2">
          <CourseChapters loading={loading} courseDetail={courseDetail} />
        </div>
        <div>
          <CourseStatus courseDetail={courseDetail} />
          <UpgradeToPro />
          <CommunityHelpSection />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
