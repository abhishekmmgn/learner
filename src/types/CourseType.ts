export type CourseType = {
  title: string;
  description: string;
  image: string;
  duration: string;
  topics: string;
  audio: string;
  subtitles: string;
  attachments?: Array<string>;
  instructorId: string;
  instructor: string;
  students: number;
};