import { Skeleton } from "../ui/skeleton";

export function TopicCardSkeleton() {
  return (
    <div className="min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm">
      <Skeleton className="w-full object-cover aspect-video rounded-t-lg rounded-b-none" />
    </div>
  );
}
