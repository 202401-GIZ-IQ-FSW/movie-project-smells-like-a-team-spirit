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
import NavCard from "./NavCard";
import Image from "next/image";
import Logo from "@/public/logo";
export default function NavBar() {
  return (
    <nav className="z-10 fixed top-0 w-full bg-gradient-to-b from-primary-foreground to-transparent backdrop-blur-xl p-4 flex justify-between items-center md:hidden sm:hidden">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="px-5">
                <Link href="/">
                  <div>
                    <Logo className="w-10 h-16" />
                  </div>
                </Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
                <NavigationMenuTrigger>Lists</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col w-36 h-24 justify-around p-2 items-center rounded-sm">
                    <div>
                      <Link
                        href={"/now-playing"}
                        className="p-3 w-44 text-center outline-primary hover:outline-offset-2 hover:outline-1 rounded-sm"
                      >
                        Now Playing
                      </Link>
                    </div>
                    <div></div>
                    <div>
                      <Link
                        href={"/upcoming"}
                        className="p-3 w-44 text-center outline-primary hover:outline-offset-2 hover:outline-1 rounded-sm"
                      >
                        Upcoming
                      </Link>
                    </div>
                  </div>
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/actors" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Actors
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
