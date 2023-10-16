import { Skeleton } from "../ui/skeleton";

export function CourseCardSkeleton() {
  return (
    <div className="max-h-96 min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm">
      <Skeleton className="w-full object-cover aspect-video rounded-t-lg rounded-b-none" />
      <div className="h-[120px] flex flex-col justify-center px-3 w-full py-4 rounded-b-lg">
        <Skeleton className="h-4 w-[250px] mb-3" />
        <Skeleton className="h-4 w-[220px]" />
        <Skeleton className="h-4 w-[200px] my-1" />
        <Skeleton className="h-4 w-[180px]" />
      </div>
    </div>
  );
}
