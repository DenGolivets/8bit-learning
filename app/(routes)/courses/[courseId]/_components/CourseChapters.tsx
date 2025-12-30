import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Chapter, CourseType } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface CourseChaptersProps {
  loading: boolean;
  courseDetail: CourseType | undefined;
}

const CourseChapters = ({ loading, courseDetail }: CourseChaptersProps) => {
  const enableExercise = (
    chapterIndex: number,
    exerciseIndex: number,
    chapterExercisesLength: number
  ) => {
    const completed = courseDetail?.completedExercise;

    // If nothing is completed, enable FIRST exercise ONLY
    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    // last completed
    const last = completed[completed.length - 1];

    // Convert to global exercise number
    const currentExerciseNumber =
      chapterIndex * chapterExercisesLength + exerciseIndex + 1;

    const lastCompletedNumber =
      (last.chapterId - 1) * chapterExercisesLength + last.exerciseId;

    return currentExerciseNumber === lastCompletedNumber + 2;
  };

  const isExerciseCompleted = (chapterId: number, exerciseId: number) => {
    const completeChapters = courseDetail?.completedExercise;
    const competeChapter = completeChapters?.find(
      (item) => item.chapterId === chapterId && item.exerciseId === exerciseId
    );
    return competeChapter ? true : false;
  };

  const sortedChapters = [...(courseDetail?.chapters || [])].sort(
    (a, b) => a.chapterId - b.chapterId
  );

  return (
    <div>
      {courseDetail?.chapters?.length == 0 ? (
        <div>
          <Skeleton className="w-full h-[100px] rounded-xl" />
          <Skeleton className="w-full h-[100px] rounded-xl mt-5" />
        </div>
      ) : (
        <div className="p-5 border-4 rounded-2xl">
          {sortedChapters.map((chapter: Chapter, index) => (
            <Accordion
              type="single"
              collapsible
              key={chapter?.id}
              className="mt-3"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-4xl flex items-center">
                  <div className="flex gap-10">
                    <h2 className="size-12 bg-zinc-900 flex items-center rounded-full justify-center">
                      {index + 1}
                    </h2>
                    <h2>{chapter?.name}</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-7 bg-zinc-900 rounded-xl mt-3">
                    {chapter?.exercises?.map((exercise, indexExc) => {
                      return (
                        <div
                          key={indexExc}
                          className="flex items-center justify-between mb-7"
                        >
                          <div className="flex items-center gap-10 font-game">
                            <h2 className="text-3xl">
                              Excercise{" "}
                              {index * chapter?.exercises?.length +
                                indexExc +
                                1}
                            </h2>
                            <h2 className="text-3xl">{exercise?.name}</h2>
                          </div>
                          {enableExercise(
                            index,
                            indexExc,
                            chapter?.exercises?.length
                          ) ? (
                            <Link href={'/courses/' + courseDetail?.courseId + '/' + chapter?.chapterId + '/' + exercise?.slug}>
                              <Button variant={"pixel"}>
                                {exercise?.xp} XP
                              </Button>
                            </Link>
                          ) : isExerciseCompleted(
                              chapter?.chapterId,
                              indexExc + 1
                            ) ? (
                            <Button variant={"pixel"} className="bg-green-600">
                              Completed
                            </Button>
                          ) : (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant={"pixelDisabled"}>???</Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="font-game text-lg">
                                  Please Enroll first
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseChapters;
