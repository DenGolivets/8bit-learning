import Image from "next/image";
import { CourseType } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

interface CourseDetailBannerProps {
  loading: boolean;
  courseDetail: CourseType | undefined;
}

const CourseDetailBanner = ({
  loading,
  courseDetail,
}: CourseDetailBannerProps) => {
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
            <Button variant={"pixel"} className="text-2xl mt-7" size={"lg"}>
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailBanner;
