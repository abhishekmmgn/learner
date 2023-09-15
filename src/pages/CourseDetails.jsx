import Back from "../components/Back";
import { useState } from "react";

export default function CourseDetails(props) {
  const [enrolled, setEnrolled] = useState(false);
  return (
    <div className="w-full h-full">
      <Back />
      <>
        <div className="md:my-8 flex flex-col md:flex-row h-min gap-5 items-stretch">
          <img
            src="https://source.unsplash.com/random"
            alt="Course Photo"
            className="w-full aspect-video bg-gray-light-600 md:ml-8 md:w-1/3 dark:bg-gray-dark-700"
          />

          <div className="flex flex-col items-center justify-between md:items-start px-4 md:mr-8 mb-8 md:mb-0">
            <div>
              <h1 className="text-2xl font-semibold line-clamp-2 md:text-3xl lg:text-4xl">
                Principles Of Discrete Applied Mathematics
              </h1>
              <p className="mt-2 mb-5 text-base text-black-tertiary line-clamp-5 md:line-clamp-[10] sm:text-base+ md:text-lg md:mb-4 dark:text-white-tertiary">
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
            <p className="mb-2 text-base+ md:text-lg lg:text-lg+">Syllabus</p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+ dark:bg-gray-dark-800"></div>
          </div>

          {/* Information */}
          <div>
            <p className="mb-2 text-base+ md:text-lg lg:text-lg+">
              Information
            </p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+ dark:bg-gray-dark-800">
              <p className="text-black-secondary dark:text-white-secondary">
                Level
              </p>
              <p className="mb-2 text-black-tertiary dark:text-white-tertiary">
                Intermediate
              </p>
              <p className="text-black-secondary dark:text-white-secondary">
                Duration
              </p>
              <p className="mb-2 text-black-tertiary dark:text-white-tertiary">
                2 months
              </p>
              <p className="text-black-secondary dark:text-white-secondary">
                Topics
              </p>
              <p className="mb-2 text-black-tertiary dark:text-white-tertiary">
                Mathematics: Applied Mathematics, Discrete Mathematics,
                Probability and Statistics, Social Science: Communication
              </p>
              <p className="text-black-secondary dark:text-white-secondary">
                Teachers
              </p>
              <p className="mb-2 text-black-tertiary dark:text-white-tertiary">
                Prof. Michel Goemans, Susan Ruff, Dr. Lorenzo Orecchia, Dr.
                Richard Peng
              </p>
              <p className="text-black-secondary dark:text-white-secondary">
                Students
              </p>
              <p className="text-black-tertiary dark:text-white-tertiary">
                120K
              </p>
            </div>
          </div>

          {/* Language */}
          <div>
            <p className="mb-2 text-base+ md:text-lg lg:text-lg+">Languages</p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+ dark:bg-gray-dark-800">
              <p className="text-black-secondary dark:text-white-secondary">
                Audio
              </p>
              <p className="mb-2 text-black-tertiary dark:text-white-tertiary">
                English, Spanish, Hindi
              </p>
              <p className="text-black-secondary dark:text-white-secondary">
                Subtitles
              </p>
              <p className="mb-2 text-black-tertiary dark:text-white-tertiary">
                English, Hindi, Spanish, French, Korean Chinese, etc
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
