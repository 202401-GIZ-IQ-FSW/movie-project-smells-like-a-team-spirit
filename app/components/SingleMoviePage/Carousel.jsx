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

export default function CarouselPlugin({ array }) {
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
        {array.slice(0, 5).map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Link href={`/movie/${item.id}`}>
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <Image
                      className=""
                      src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                      height={150}
                      width={150}
                      alt="actor image"
                    ></Image>
                    <div className="text-center text-md mt-4  ">
                      {item.title}
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
