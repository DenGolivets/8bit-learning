"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import { Exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";

export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  exercises: Exercise[];
  exerciseData: ExerciseData;
  id: number;
  name: string;
};

export type ExerciseData = {
  chapterId: number;
  courseId: number;
  desc: string;
  exercisesContent: ExercisesContent;
  exerciseName: string;
};

export type ExercisesContent = {
  content: string;
  hint: string;
  hintXp: number;
  output: string;
  task: string;
  starterCode: any;
};

const Playground = () => {
  const { courseId, chapterId, exerciseSlug } = useParams();
  const [loading, setLoading] = useState(false);
  const [courseExerciseData, setCourseExerciseData] = useState<CourseExercise>();

  const getExerciseCourseDetail = async () => {
    setLoading(true);
    const result = await axios.post("/api/exercise", {
      courseId: Number(courseId),
      chapterId: Number(chapterId),
      exerciseId: exerciseSlug,
    });
    console.log(result.data);
    setCourseExerciseData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getExerciseCourseDetail();
  }, []);

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection courseExerciseData={courseExerciseData} loading={loading} />
        </div>
        <div>Code Editor</div>
      </SplitterLayout>
    </div>
  );
};

export default Playground;
