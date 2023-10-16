import { CourseCardSkeleton } from "./CourseCardSkeleton";
import { Skeleton } from "../ui/skeleton";

export default function LibrarySkeleton() {
  return (
    <div className="pl-4 py-6 md:pl-6 space-y-6 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0 sm:space-y-8 xl:space-y-10">
      <div>
        <Skeleton className="h-4 w-[250px] mb-3" />
        <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-clip no-scrollbar">
          <CourseCardSkeleton />
          <CourseCardSkeleton />
          <CourseCardSkeleton />
          <CourseCardSkeleton />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-[250px] mb-3" />
        <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-clip no-scrollbar">
          <CourseCardSkeleton />
          <CourseCardSkeleton />
          <CourseCardSkeleton />
          <CourseCardSkeleton />
        </div>
      </div>
    </div>
  );
}
