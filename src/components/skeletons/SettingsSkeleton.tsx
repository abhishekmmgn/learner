import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";

export function SettingsSkeleton() {
  return (
    <div className="p-4 md:px-6 xl:px-8 py-6 sm:py-8 md:pt-12 md:pb-0 flex flex-col items-center">
      <div className="w-full md:max-w-2xl xl:mr-[248px] flex flex-col gap-4">
        <div className="flex gap-3 items-center bg-background p-4 rounded-lg">
          <Skeleton className="w-16 h-16 rounded-full" />
          <div>
            <Skeleton className="h-4 w-[220px]" />
            <Skeleton className="h-4 w-[200px] my-1" />
          </div>
        </div>
        <Skeleton className="w-28 h-4 -mb-2" />
        <div className="p-4 rounded-lg bg-background space-y-3">
          <div className="flex justify-between">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="w-4 h-4" />
          </div>
          <Separator />
          <Skeleton className="w-28 h-4" />
          <Skeleton className="mx-auto w-full h-10" />
          <Separator />
          <Skeleton className="w-28 h-4" />
          <Skeleton className="mx-auto w-full h-10" />
        </div>
        <Skeleton className="w-28 h-4 -mb-2" />
        <div className="p-4 rounded-lg bg-background flex justify-between">
          <Skeleton className="w-28 h-4" />
          <Skeleton className="w-4 h-4" />
        </div>
        <Skeleton className="w-28 h-4 -mb-2" />
        <div className="p-4 rounded-lg bg-background flex justify-between">
          <Skeleton className="w-28 h-4" />
          <Skeleton className="w-4 h-4" />
        </div>
        <Skeleton className="w-28 h-4 -mb-2" />
        <div className="p-4 rounded-lg bg-background flex justify-between">
          <Skeleton className="w-28 h-4" />
          <Skeleton className="w-4 h-4" />
        </div>
        <Skeleton className="w-28 h-4 -mb-2" />
        <div className="p-4 rounded-lg bg-background flex flex-col justify-between gap-3">
          <div className="flex justify-between">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="w-4 h-4" />
          </div>
          <Separator />
          <div className="flex justify-between">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="w-4 h-4" />
          </div>
          <Separator />
          <div className="flex justify-between">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
