import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"

  
export default function MovieCard({image_url, title, description, rating, votes ,type}) {
    return (
                <div className='sm:w-72   p-4 h-full'>
            <Card >
                <CardHeader>
                <div className='h-80'>
                <Image src={image_url} alt={title} width={400} height={600} className="w-80"/>
                </div>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-row justify-between'>
                    <CardTitle><Link href={''} className='underline underline-offset-8 leading-relaxed' >{(title.length<15)?title:`${title.slice(0,16)}...`}</Link></CardTitle>
                    <Badge variant="secondary" className="h-6">{type}</Badge>
                    </div>
                </CardContent>
                <CardFooter>
                <CardDescription className="h-20">{description.slice(0,100)}...</CardDescription>
                </CardFooter>
                <CardFooter>
                <CardDescription className="mt-2 ">
                    <span className="mr-2">RATING: {rating}</span>
                    <b>|</b>
                    <span className="ml-2">VOTES: {votes}</span>
                </CardDescription>
                </CardFooter>
            </Card>
        </div>

    )
}
