import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const RelatedMovieCard = ({endpoint,title,id}) => {
  return (
    <Link href={""}>
      <Card className="h-[230px] w-[140px]">
        <CardContent className="mt-4">
          <Image
            className=""
            src={`https://image.tmdb.org/t/p/w185${endpoint}`}
            height={100}
            width={100}
            alt="actor image"
          ></Image>
          <div className="text-center text-md mt-4 truncate ">{title}</div>
        </CardContent>
      </Card>
    </Link>  );
};

export default RelatedMovieCard;
