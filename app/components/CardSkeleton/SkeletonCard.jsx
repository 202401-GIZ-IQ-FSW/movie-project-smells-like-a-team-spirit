"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center py-10 ">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className=" m-10 outline outline-primary-foreground outline-offset-[25px] rounded-sm"
        >
          <Skeleton className="h-[240px] w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[90px] mt-2" />

          <div className="space-y-2 pt-5">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="pt-5 flex flex-row justify-around items-center">
            <Skeleton className="h-4 w-[90px]" />
            <Skeleton className="h-4 w-[90px] " />
          </div>
        </div>
      ))}
    </div>
  );
}
