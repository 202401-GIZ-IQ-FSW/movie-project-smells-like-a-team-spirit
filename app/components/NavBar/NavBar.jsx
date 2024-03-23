"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import NavDropdown from "./NavDropdown";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-primary-foreground to-transparent backdrop-blur-xl p-4 flex justify-between items-center md:hidden sm:hidden">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="px-5">
                <Link href="/">
                  <b>Home</b>
                </Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <h1 className="text-4xl pb-1 pl-5 font-bold select-none">\</h1>
        <div className="flex items-center space-x-4 pl-5 md:pl-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavDropdown endPoint={"genre/movie/list"} type={"movie"} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>TV Shows</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavDropdown endPoint={"genre/tv/list"} type={"tv"} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/top-charts" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Top Charts
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/popular" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Popular
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="px-5">
                <Link href="/sign">
                  <b>Sign in</b>
                </Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DarkModeToggle sizeparm={"icon"} />
      </div>
    </nav>
  );
}
