import React from 'react'
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function MovieCard({image_url, title, description, rating, votes}) {
    return (
        <div className='w-72'>
            <Card>
                <CardHeader>
                <Image src={image_url} alt={title} width={300} height={300} />
                </CardHeader>
                <CardContent>
                <CardTitle>{title}</CardTitle>
                </CardContent>
                <CardFooter>
                <CardDescription>{description}</CardDescription>
                </CardFooter>
                <CardFooter>
                <CardDescription><span>RATING:{rating}</span>|<span>VOTES:{votes}</span></CardDescription>
                </CardFooter>
            </Card>
        </div>

    )
}
