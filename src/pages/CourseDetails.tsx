import Back from "../components/Back";
import { useState } from "react";

export default function CourseDetails(props) {
  const [enrolled, setEnrolled] = useState(false);
  return (
    <div className="w-full h-full">
      <Back />
      <>
        <div className="lg:my-8 flex flex-col lg:flex-row h-min gap-5 items-stretch">
          <img
            src="https://source.unsplash.com/random"
            alt="Course Photo"
            className="w-full aspect-video bg-gray-light-500 lg:ml-8 lg:max-w-sm dark:bg-gray-dark-700"
          />

          <div className="flex flex-col items-center justify-between lg:items-start px-4 lg:mr-8 md:px-8 mb-8 lg:mb-0 lg:w/2/3">
            <div>
              <h1 className="text-2xl font-semibold line-clamp-2 md:text-3xl lg:text-4xl dark:text-white-tertiary/90">
                Principles Of Discrete Applied Mathematics
              </h1>
              <p className="mt-2 mb-5 text-base text-black-tertiary line-clamp-5 md:line-clamp-[10] sm:text-base+ md:text-lg md:mb-4 dark:text-white-tertiary/70">
                This course is an introduction to discrete applied mathematics.
                Topics include probability, counting, linear programming,
                number-theoretic algorithms, sorting, data compression, and
                error-correcting codes. This is a Communication Intensive in the
                Major CI-M course, and thus includes a writing component
              </p>
            </div>
            <div className="w-full md:max-w-sm">
              {enrolled ? (
                <button className="btn-text mx-auto">Unenroll</button>
              ) : (
                <button className="btn-outline mx-auto">Enroll</button>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 space-y-6">
          {/* Syllabus */}
          <div>
            <p className="mb-3 text-base+ md:text-lg lg:text-lg+">Syllabus</p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+ dark:bg-background-dark-secondary"></div>
          </div>

          {/* Information */}
          <div>
            <p className="mb-3 text-base+ md:text-lg lg:text-lg+">
              Information
            </p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+ dark:bg-background-dark-secondary">
              <p className="text-black dark:text-white-tertiary/90">
                Level
              </p>
              <p className="mb-3 text-black-tertiary dark:text-white-tertiary/70">
                Intermediate
              </p>
              <p className="text-black dark:text-white-tertiary/90">
                Duration
              </p>
              <p className="mb-3 text-black-tertiary dark:text-white-tertiary/70">
                2 months
              </p>
              <p className="text-black dark:text-white-tertiary/90">
                Topics
              </p>
              <p className="mb-3 text-black-tertiary dark:text-white-tertiary/70">
                Mathematics: Applied Mathematics, Discrete Mathematics,
                Probability and Statistics, Social Science: Communication
              </p>
              <p className="text-black dark:text-white-tertiary/90">
                Teachers
              </p>
              <p className="mb-3 text-black-tertiary dark:text-white-tertiary/70">
                Prof. Michel Goemans, Susan Ruff, Dr. Lorenzo Orecchia, Dr.
                Richard Peng
              </p>
              <p className="text-black dark:text-white-tertiary/90">
                Students
              </p>
              <p className="text-black-tertiary dark:text-white-tertiary/70">
                120K
              </p>
            </div>
          </div>

          {/* Language */}
          <div>
            <p className="mb-3 text-base+ md:text-lg lg:text-lg+">Languages</p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+ dark:bg-background-dark-secondary">
              <p className="text-black dark:text-white-tertiary/90">
                Audio
              </p>
              <p className="mb-3 text-black-tertiary dark:text-white-tertiary/70">
                English, Spanish, Hindi
              </p>
              <p className="text-black dark:text-white-tertiary/90">
                Subtitles
              </p>
              <p className="mb-3 text-black-tertiary dark:text-white-tertiary/70">
                English, Hindi, Spanish, French, Korean Chinese, etc
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
