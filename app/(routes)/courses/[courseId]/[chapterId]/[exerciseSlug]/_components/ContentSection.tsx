import { Skeleton } from "@/components/ui/skeleton";
import { CourseExercise } from "../page";
import { Lightbulb } from "lucide-react";

interface ContentSectionProps {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
}

const ContentSection = ({
  courseExerciseData,
  loading,
}: ContentSectionProps) => {
  const contentInfo = courseExerciseData?.exerciseData;
  return (
    <div className="p-10">
      {loading || !contentInfo || !courseExerciseData ? (
        <Skeleton className="h-full w-full m-10 rounded-2xl" />
      ) : (
        <div>
          <h2 className="font-game text-3xl my-3">
            {courseExerciseData?.exerciseData?.exerciseName}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: contentInfo?.exercisesContent?.content,
            }}
          />
          <div>
            <h2 className="font-game text-3xl mt-4">Task</h2>
            <div
              className="p-4 border rounded-2xl bg-zinc-800 mt-3"
              dangerouslySetInnerHTML={{
                __html: contentInfo?.exercisesContent?.task,
              }}
            />
          </div>
          <div>
            <h2 className="font-game text-3xl mt-4 flex gap-2 items-center text-yellow-400">
              <Lightbulb /> Hint
            </h2>
            <div
              className="p-4 border rounded-2xl bg-zinc-800 mt-3"
              dangerouslySetInnerHTML={{
                __html: contentInfo?.exercisesContent?.hint,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentSection;
