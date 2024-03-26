import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function ActorMoviesCarousel({ movies }) { 
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.map((movie) => ( 
          <CarouselItem key={movie.id}>
            <div className="p-1">
              <Link href={`/movie/${movie.id}`}> 
                {/* Removed <a> tag */}
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <Image
                        className=""
                        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                        height={150}
                        width={150}
                        alt={movie.title}
                      ></Image>
                      <div className="text-center text-md mt-4  ">
                        {movie.title}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
