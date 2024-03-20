'use client'

import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function NavBar() {

    return (
        <div className="flex flex-row justify-between items-center p-3 ">
            <NavigationMenu>
                    <div>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <div className="px-5">
                                <Link href="/"><b>Home</b></Link>
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </div>
                    <h1 className="text-4xl pb-1 font-bold select-none" >\</h1>
                    <div className="p-3 justify-center flex flex-row">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Movies
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>
                    <div className="p-3">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <NavigationMenuItem>
                                        <Link href="/shows">TV Shows</Link>
                                    </NavigationMenuItem>
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>
                    <div className="p-3">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <NavigationMenuItem>
                                        <Link href="/top-actors">Top Actors</Link>
                                    </NavigationMenuItem>
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>

                    <div className="p-3">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <NavigationMenuItem>
                                        <Link href="/top-shows">Top Charts</Link>
                                    </NavigationMenuItem>
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>
            </NavigationMenu>
            <NavigationMenu>
            <div className="flex flex-row items-center justify-end">
                <NavigationMenuList >
                    <NavigationMenuItem >
                        <div className="px-5">
                            <Link href="/sign"><b>Sign in</b></Link>
                        </div>
                    </NavigationMenuItem>
                </NavigationMenuList>

                <div className="px-3">
                    <DarkModeToggle />
                </div>
            </div>
            </NavigationMenu>
        </div>
    )
}
