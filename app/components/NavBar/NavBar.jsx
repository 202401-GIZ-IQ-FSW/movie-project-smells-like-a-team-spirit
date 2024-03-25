"use client"

import React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
import NavDropdown from "./NavDropdown"
import Header from "../header/header"

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center p-3 ">
      <NavigationMenu>
        <div>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="px-5">
                <Header />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <div>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="px-5">
                <Link href="/">
                  <b>Home</b>
                </Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <h1 className="text-4xl pb-1 pl-5 font-bold select-none">\</h1>
        <div className=" justify-center pl-5 flex flex-row">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavDropdown endPoint={"genre/movie/list"} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="p-3 justify-center flex flex-row">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>TV Shows</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavDropdown endPoint={"genre/tv/list"} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="p-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/trending-now" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Trending Now
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className={navigationMenuTriggerStyle()}>
                <Link href="/actors">
                  <b>Actors</b>
                </Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
      <NavigationMenu>
        <div className="flex flex-row items-center justify-end">
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="px-5">
                <Link href="/sign">
                  <b>Sign in</b>
                </Link>
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
