'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Link from "next/link";

  import React, { createContext } from 'react';
  export default function NavBar() {

    return (
        <div className="flex flex-row  items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/">Home</Link>
                    </NavigationMenuItem>
                    
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
  }
  