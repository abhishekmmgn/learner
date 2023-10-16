import { Skeleton } from "../ui/skeleton";

export default function GeneralSkeleton() {
  return (
    <div className="h-full px-4 py-6 md:px-6 xl:px-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0 flex items-center justify-center">
      <div className="flex gap-1">
        <Skeleton className="w-4 aspect-square rounded-full md:w-5" />
        <Skeleton className="w-4 aspect-square rounded-full md:w-5" />
        <Skeleton className="w-4 aspect-square rounded-full md:w-5" />
        <Skeleton className="w-4 aspect-square rounded-full md:w-5" />
        <Skeleton className="w-4 aspect-square rounded-full md:w-5" />
      </div>
    </div>
  );
}
