import Back from "../components/Back";
import { useState } from "react";

export default function CourseDetails(props) {
  const [enrolled, setEnrolled] = useState(true);
  return (
    <div className="w-full h-full">
      <Back />
      <>
        <img
          src="https://source.unsplash.com/random"
          alt="Course Photo"
          className="w-full aspect-video max-w-4xl bg-gray-light-600 md:ml-8 md:mt-8 dark:bg-gray-dark-700"
        />

        {/* Title and description */}
        <div className="px-4 md:px-8 mt-4 mb-8">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Principles Of Discrete Applied Mathematics
          </h1>
          <p className="mt-2 ext-base text-black-tertiary overflow-hidden max-h-20 sm:text-base+ md:text-lg md:mb-4 dark:text-white-tertiary">
            This course is an introduction to discrete applied mathematics.
            Topics include probability, counting, linear programming,
            number-theoretic algorithms, sorting, data compression, and
            error-correcting codes. This is a Communication Intensive in the
            Major CI-M course, and thus includes a writing component
          </p>
        </div>

        {/* Syllabus */}
        <div className="px-4 md:px-8 space-y-6">
          <div>
            <p className="mb-2 text-base+ md:text-lg lg:text-lg+">
              Syllabus
            </p>
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
                Mathematics: Applied Mathematics, Discrete Mathematics, Probability
                and Statistics, Social Science: Communication
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
            <p className="mb-2 text-base+ md:text-lg lg:text-lg+">
              Languages
            </p>
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

      <div className="w-full h-20 sticky bottom-0 left-0 right-0 px-4 py-3">
        {enrolled ? (
          <button className="btn-text mx-auto">Unenroll</button>
        ) : (
          <button className="btn-outline mx-auto">Enroll</button>
        )}
      </div>
    </div>
  );
}
