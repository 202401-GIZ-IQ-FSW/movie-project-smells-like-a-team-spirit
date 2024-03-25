import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CardActor({ endpoint, name, popilarity }) {
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
          <div className="text-center text-md mt-4 truncate ">{name}</div>
          <div className="text-center mt-0 text-sm text-yellow-500">
            Popularity:{popilarity}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
