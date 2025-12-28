import Image from "next/image";
import { CourseType } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

interface CourseDetailBannerProps {
  loading: boolean;
  courseDetail: CourseType | undefined;
  refreshData: () => void;
}

const CourseDetailBanner = ({
  loading,
  courseDetail,
  refreshData,
}: CourseDetailBannerProps) => {
  const [loading_, setLoading_] = useState(false);
  const enrollCourse = async () => {
    setLoading_(true);
    const result = await axios.post("/api/enroll-course", {
      courseId: courseDetail?.courseId,
    });
    console.log(result);
    toast.success("Course Enrolled!");
    refreshData();
    setLoading_(false);
  };
  return (
    <div>
      {!courseDetail ? (
        <Skeleton className="w-full h-[400px] rounded-2xl" />
      ) : (
        <div className="relative">
          <Image
            src={courseDetail?.bannerImage}
            alt={courseDetail?.title}
            width={1400}
            height={300}
            className="w-full h-[400px] object-cover"
          />
          <div className="font-game absolute top-0 h-full pt-20 p-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-transparent">
            <h2 className="text-6xl">{courseDetail?.title}</h2>
            <p className="text-3xl mt-3 text-gray-300">{courseDetail?.desc}</p>
            {!courseDetail?.userEnrolled ? (
              <Button
              variant={"pixel"}
              className="text-2xl mt-7"
              size={"lg"}
              onClick={enrollCourse}
              disabled={loading_}
            >
              {loading_ && <Loader2Icon className="h-4 w-4 animate-spin" />}
              Enroll Now
            </Button>
            ) : (
              <Button 
                className="text-2xl mt-7" 
                size={"lg"}
                variant={'pixel'}
              >
                Continue Learning...
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailBanner;
