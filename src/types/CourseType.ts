export type CourseType = {
  title: string;
  description: string;
  image: string;
  duration: string;
  topics: Array<string>;
  audio: Array<string>;
  subtitles: Array<string>;
  attachments?: Array<string>;
  instructorId: string;
  instructor: string;
  students: number;
};