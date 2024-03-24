import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MovieCard({
  image_url,
  title,
  description,
  rating,
  votes,
  type,
  id,
}) {
  return (
    <div className="w-72 place-items-center p-4 h-full">
      <Card className="sm:w-[23rem] ">
        <div className=" flex flex-col items-center justify-center">
          <div className="h-30">
            <CardHeader>
              <Image
                src={image_url}
                alt={title}
                width={400}
                height={600}
                className="w-80"
              />
            </CardHeader>
          </div>
          <div className="mt-6">
            <CardContent>
              <div className="flex flex-row justify-between ">
                <CardTitle>
                  <Link
                    href={`/movie/${id}`}
                    className="underline underline-offset-8 leading-relaxed"
                  >
                    {title.length <= 16 ? title : `${title.slice(0, 16)}...`}
                  </Link>
                </CardTitle>
                <Badge variant="secondary" className="h-6">
                  {type}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <CardDescription className="h-20">
                {description.slice(0, 100)}...
              </CardDescription>
            </CardFooter>
            <CardFooter>
              <CardDescription className="mt-2 text-xs">
                <span className="mr-2">RATING: {rating}</span>
                <b>|</b>
                <span className="ml-2 text-">VOTES: {votes}</span>
              </CardDescription>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
