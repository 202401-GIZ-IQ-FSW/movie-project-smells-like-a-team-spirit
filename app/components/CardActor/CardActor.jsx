import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
export default function CardActor({ endpoint, name, popilarity,id }) {
  return (
    <Link href={`/actors/${id}`}>
      <Card className="h-[230px] w-[140px]">
        <CardContent className="mt-4">
          <ImageWithFallback
            className=""
            src={`https://image.tmdb.org/t/p/w185${endpoint}`}
            height={100}
            width={100}
            alt="actor image"
          />
          <div className="text-center text-md mt-4 truncate ">{name}</div>
          <div className="text-center mt-0 text-sm text-yellow-500">
            Popularity:{popilarity}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
