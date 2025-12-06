import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Chapter, CourseType } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CourseChaptersProps {
  loading: boolean;
  courseDetail: CourseType | undefined;
}

const CourseChapters = ({ loading, courseDetail }: CourseChaptersProps) => {
  return (
    <div>
      {courseDetail?.chapters?.length == 0 ? (
        <div>
          <Skeleton className="w-full h-[100px] rounded-xl" />
          <Skeleton className="w-full h-[100px] rounded-xl mt-5" />
        </div>
      ) : (
        <div className="p-5 border-4 rounded-2xl">
          {courseDetail?.chapters?.map((chapter: Chapter, index) => (
            <Accordion
              type="single"
              collapsible
              key={chapter?.chapterId}
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
                    {chapter?.exercises?.map((exercise, indexExc) => (
                      <div
                        key={indexExc}
                        className="flex items-center justify-between mb-7"
                      >
                        <div className="flex items-center gap-10 font-game">
                          <h2 className="text-3xl">
                            Excercise{" "}
                            {index * chapter?.exercises?.length + indexExc + 1}
                          </h2>
                          <h2 className="text-3xl">{exercise?.name}</h2>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={"pixelDisabled"}>
                              ???
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-game text-lg">Please Enroll first</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
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
