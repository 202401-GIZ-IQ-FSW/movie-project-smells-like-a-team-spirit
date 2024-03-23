"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from "react";
import { fetchDataToEndpoint } from "@/utils/fetchData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CaretSortIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavCard from "./NavCard";

export default function MobileNavContent() {
  const [isOpenMovie, setIsOpenMovie] = useState(false);
  const [isOpenTv, setIsOpenTv] = useState(false);
  const [genresMovie, setGenresMovie] = useState([]);
  const [genresTv, setGenresTv] = useState([]);

  useEffect(() => {
    fetchDataToEndpoint("genre/movie/list")
      .then((data) => {
        setGenresMovie(data.genres.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
    fetchDataToEndpoint("genre/tv/list")
      .then((data) => {
        setGenresTv(data.genres.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Collapsible
          open={false}
          className="w-52 space-y-2 mt-4 justify-center items-center bg-primary-foreground rounded-md shadow-md text-center"
        >
          <CollapsibleTrigger asChild>
            <Link
              href="/"
              className="flex-row-reverse flex justify-around pl-4 pr-8 truncate text-xs h-8  items-center"
            >
              <div className="pl-[87px]">
                <ChevronRightIcon className="h-4 w-4 " />
              </div>
              <div className="font-bold">Home Page</div>
            </Link>
          </CollapsibleTrigger>
          <CollapsibleContent className=" bg-secondary rounded-md text-center "></CollapsibleContent>
        </Collapsible>
        <div>
          <Collapsible
            open={false}
            className="w-52 space-y-2 mt-4 justify-center items-center bg-primary-foreground rounded-md shadow-md text-center"
          >
            <CollapsibleTrigger asChild>
              <Link
                href="/top-charts"
                className="flex-row-reverse flex justify-around pl-3 pr-7 text-xs h-8  items-center"
              >
                <div className="pl-[87px]">
                  <ChevronRightIcon className="h-4 w-4 " />
                </div>
                <div className="font-bold">Top Charts</div>
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent className=" bg-secondary rounded-md text-center "></CollapsibleContent>
          </Collapsible>
        </div>
        <div>
          <Collapsible
            open={false}
            className="w-52 space-y-2 mt-4 justify-center items-center bg-primary-foreground rounded-md shadow-md text-center"
          >
            <CollapsibleTrigger asChild>
              <Link
                href="/popular"
                className="flex-row-reverse flex justify-around pl-2 pr-5 text-xs h-8  items-center"
              >
                <div className="pl-[87px]">
                  <ChevronRightIcon className="h-4 w-4 " />
                </div>
                <div className="font-bold">Popular</div>
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent className=" bg-secondary rounded-md text-center "></CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="flex flex-row pr-28">
        <h6 className="text-[.5rem] text-primary font-thin underline-offset-4 pt-6 pr-8">
          <u>Explore Genres</u>
        </h6>
      </div>
      <div>
        <Collapsible
          open={isOpenMovie}
          onOpenChange={setIsOpenMovie}
          className="w-52 space-y-2 mt-4 justify-center items-center bg-primary-foreground rounded-md shadow-md text-center"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <div className="text-xs font-bold">Movies</div>
            <CollapsibleTrigger asChild className="">
              <Button variant="ghost" size="sm">
                <ChevronDownIcon className="h-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className=" bg-secondary rounded-md text-center text-sm">
            <div className="flex flex-col justify-center items-center">
              {genresMovie.map((genre) => (
                <div key={genre.id} className="text-center my-4 text-xs">
                  <NavCard
                    key={genre.id}
                    id={genre.id}
                    name={genre.name}
                    type={"movie"}
                    outline={`outline-none`}
                    className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm "
                  />
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div>
        <Collapsible
          open={isOpenTv}
          onOpenChange={setIsOpenTv}
          className="w-52 space-y-2 mt-4 justify-center items-center bg-primary-foreground rounded-md shadow-md text-center"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-xs font-bold">TV Shows</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className=" bg-secondary rounded-md text-center text-sm">
            <div className="flex flex-col justify-center items-center">
              {genresTv.map((genre) => (
                <div key={genre.id} className="text-center my-4 text-xs">
                  <NavCard
                    key={genre.id}
                    id={genre.id}
                    name={genre.name}
                    type={"tv"}
                    outline={`outline-none`}
                    className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm "
                  />
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="mt-4">
        <Button asChild>
          <Link href="/sign">SIGN-IN</Link>
        </Button>
      </div>
    </div>
  );
}
