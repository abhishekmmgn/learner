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
          className="w-full aspect-video max-w-4xl bg-gray-light-500 md:ml-4"
        />
        <div className="px-4 mt-4 mb-8">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            How to Sell Drugs Online
          </h1>
          <p className="text-base text-black-tertiary overflow-hidden max-h-20 sm:text-base+ md:text-lg md:mb-4">
            To impress his former girlfriend, a nerdy teen starts selling drugs online out of his bedroom, and soon becomes one of Europe's biggest dealers. To impress his former girlfriend, a nerdy teen starts selling drugs online out of his bedroom, and soon becomes one of Europe's biggest dealers.
          </p>
        </div>

        <div className="px-4 space-y-6">
          <div>
            <p className="mb-2 font-medium text-base+ md:text-lg lg:text-lg+">
              Syllabus
            </p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+"></div>
          </div>

          <div>
            <p className="mb-2 font-medium text-base+ md:text-lg lg:text-lg+">
              Information
            </p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+">
              <p className="font-medium text-black-secondary">Level</p>
              <p className="mb-2 text-black-tertiary">Intermediate</p>
              <p className="font-medium text-black-secondary">Duration</p>
              <p className="mb-2 text-black-tertiary">2 months</p>
              <p className="font-medium text-black-secondary">Topics</p>
              <p className="mb-2 text-black-tertiary">2 months</p>
              <p className="font-medium text-black-secondary">Teachers</p>
              <p className="mb-2 text-black-tertiary">
                Brendon Hunt, Jason Sudeikis, Hannah Waddingham, Juno Temple,
                Nick Mohammad, Bred Goldstein
              </p>
              <p className="font-medium text-black-secondary">Students</p>
              <p className="text-black-tertiary">120K</p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-medium text-base+ md:text-lg lg:text-lg+">
              Languages
            </p>
            <div className="p-4 rounded-xl bg-gray-light-800 text-sm+ md:text-base lg:text-base+">
              <p className="font-medium text-black-secondary">Audio</p>
              <p className="mb-2 text-black-tertiary">
                English, Spanish, Hindi
              </p>
              <p className="font-medium text-black-secondary">Subtitles</p>
              <p className="mb-2 text-black-tertiary">
                English, Hindi, Spanish, French, Korean Chinese, etc
              </p>
            </div>
          </div>
        </div>
      </>

      <div className="bg-background-light w-full h-16 sticky bottom-0 left-0 right-0 px-4 py-2">
        {enrolled ? (
          <button className="btn-text mx-auto">Unenroll</button>
        ) : (
          <button className="btn-outline mx-auto">Enroll</button>
        )}
      </div>
    </div>
  );
}
