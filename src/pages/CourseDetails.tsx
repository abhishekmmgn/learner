import { Button } from "../components/ui/button";
import Back from "../components/Back";
import { useState } from "react";

export default function CourseDetails(props) {
  const [enrolled, setEnrolled] = useState(true);
  return (
    <>
      <Back />
      <div className="lg:my-10 flex flex-col lg:flex-row h-min gap-5 items-stretch">
        <img
          src="https://source.unsplash.com/random"
          alt="Course Photo"
          className="w-full aspect-video bg-gray-light-500 lg:ml-8 lg:max-w-sm "
        />

        <div className="flex flex-col items-center justify-between lg:items-start px-4 lg:mr-8 md:px-8 mb-8 lg:mb-0 lg:w/2/3">
          <div>
            <h1 className="text-2xl font-semibold line-clamp-2 md:text-3xl">
              Principles Of Discrete Applied Mathematics
            </h1>
            <p className="mt-2 mb-5 text-base text-tertiary-foreground line-clamp-5 md:line-clamp-[10] md:text-lg md:mb-4">
              This course is an introduction to discrete applied mathematics.
              Topics include probability, counting, linear programming,
              number-theoretic algorithms, sorting, data compression, and
              error-correcting codes. This is a Communication Intensive in the
              Major CI-M course, and thus includes a writing component
            </p>
          </div>
          <div className="w-full md:max-w-sm">
            {enrolled ? (
              <Button variant="outline">Unenroll</Button>
            ) : (
              <Button>Enroll</Button>
            )}
          </div>
        </div>
      </div>

      <div className="pb-4 px-4 md:px-8 md:pb-8 space-y-6">
        {/* Syllabus */}
        <div>
          <p className="mb-3 md:text-lg font-medium">Syllabus</p>
          <div className="p-4 rounded-xl bg-background text-sm+ md:text-base lg:text-base+"></div>
        </div>

        {/* Information */}
        <div>
          <p className="mb-3 md:text-lg font-medium">Information</p>
          <div className="p-4 rounded-xl bg-background text-sm+ md:text-base lg:text-base+">
            <p>Level</p>
            <p className="mb-3 text-tertiary-foreground">Intermediate</p>
            <p>Duration</p>
            <p className="mb-3 text-tertiary-foreground">2 months</p>
            <p>Topics</p>
            <p className="mb-3 text-tertiary-foreground">
              Mathematics: Applied Mathematics, Discrete Mathematics,
              Probability and Statistics, Social Science: Communication
            </p>
            <p>Teachers</p>
            <p className="mb-3 text-tertiary-foreground">
              Prof. Michel Goemans, Susan Ruff, Dr. Lorenzo Orecchia, Dr.
              Richard Peng
            </p>
            <p>Students</p>
            <p className="text-tertiary-foreground">120K</p>
          </div>
        </div>

        {/* Language */}
        <div>
          <p className="mb-3 md:text-lg font-medium">Languages</p>
          <div className="p-4 rounded-xl bg-background text-sm+ md:text-base lg:text-base+">
            <p>Audio</p>
            <p className="mb-3 text-tertiary-foreground">
              English, Spanish, Hindi
            </p>
            <p>Subtitles</p>
            <p className="mb-3 text-tertiary-foreground">
              English, Hindi, Spanish, French, Korean Chinese, etc
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
