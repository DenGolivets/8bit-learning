import Image from "next/image";
import CourseList from "./_components/CourseList";

const CoursesPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative">
        <Image
          src="/course-banner.gif"
          alt="banner"
          width={1200}
          height={300}
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-0 h-full pt-24 px-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-transparent">
          <h2 className="text-6xl font-game">Explore All Courses</h2>
          <p className="text-3xl font-game">
            Explore all courses and enrolled to learn and increase your skill
          </p>
        </div>
      </div>

      <div className="mt-8 px-10 md:px-24 lg:px-36">
        <h2 className="font-game text-4xl">All Courses</h2>
        <CourseList />
      </div>
    </div>
  );
};

export default CoursesPage;
