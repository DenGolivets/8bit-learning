import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { CourseType } from "../../_components/CourseList";
import { useEffect, useState } from "react";

interface CourseStatusProps {
  courseDetail: CourseType | undefined;
}

const CourseStatus = ({ courseDetail }: CourseStatusProps) => {
  const [counts, setCounts] = useState<{
    totalExce: number;
    totalXp: number;
  }>();

  const getCounts = () => {
    let totalExcercises = 0;
    let totalXp = 0;

    courseDetail?.chapters?.forEach((chapter) => {
      totalExcercises = totalExcercises + chapter?.exercises?.length;
      chapter?.exercises?.forEach((ex) => {
        totalXp = totalXp + ex?.xp;
      });
    });
    setCounts({ totalExce: totalExcercises, totalXp: totalXp });
  };

  useEffect(() => {
    courseDetail && getCounts();
  }, [courseDetail]);

  const updateProgress = (currentValue: number, totalValue: number) => {
    if (currentValue && totalValue) {
      const perc = (currentValue * 100) / totalValue;
      return perc;
    }
    return 0;
  };

  return (
    <div className="font-game p-4 border-4 rounded-xl w-full">
      <h2 className="text-3xl">Course Progress</h2>
      <div className="flex items-center gap-5 mt-4">
        <Image src={"/book.png"} alt="book" width={40} height={40} />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl">
            Excercises{" "}
            <span className="text-gray-400">
              {courseDetail?.completedExercise?.length}/{counts?.totalExce}
            </span>{" "}
          </h2>
          <Progress
            value={updateProgress(
              courseDetail?.completedExercise?.length ?? 0,
              counts?.totalExce ?? 0
            )}
            className="mt-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <Image src={"/star.png"} alt="book" width={40} height={40} />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl">
            XP Earned{" "}
            <span className="text-gray-400">
              {courseDetail?.courseEnrolledInfo?.xpEarned}/{counts?.totalXp}
            </span>{" "}
          </h2>
          <Progress
            value={updateProgress(
              courseDetail?.courseEnrolledInfo?.xpEarned ?? 0,
              counts?.totalXp ?? 0
            )}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseStatus;
