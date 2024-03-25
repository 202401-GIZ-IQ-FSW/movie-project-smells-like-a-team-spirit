import { PinTopIcon } from "@radix-ui/react-icons"
import React from "react"


export default function Header() {
  return (
    <div className="flex justify-center gap-9  sm:justify-between items-center py-3 lg:max-w-7xl mx-auto sm:px-6">
      <div className=" flex justify-center items-center flex-shrink">
        <PinTopIcon className="h-10 w-10" />
        <span className="md:text-2xl font-bold bg-black text-white dark:bg-white dark:text-black py-1 px-2 rounded-md text-xl">
          Late Night Cinema
        </span>
      </div>
    </div>
  )
}
