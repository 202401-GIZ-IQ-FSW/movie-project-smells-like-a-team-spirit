"use client";

import { Button } from "@/components/ui/button";
import MobileNavContent from "./MobileNavContent";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "@/public/logo";
import Link from "next/link";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { Ellipsis, SquareMenu, SquareMenuIcon } from "lucide-react";

export default function MobileNav() {
  const side = "left";
  return (
    <div className="z-50 lg:hidden xl:hidden 2xl:hidden backdrop-blur-3xl fixed top-0 w-full bg-gradient-to-b from-primary-foreground to-transparent p-4 flex justify-between items-center">
      <Drawer className shouldScaleBackground>
        <DrawerTrigger asChild className="text-xl w-10 h-9 rounded-sm ">
          <Button variant="outline" size="icon">
            <Ellipsis/>
          </Button>
        </DrawerTrigger>
        <div>
          <Link href={"/"}>
            <Logo className="w-10 h-16" />
          </Link>
        </div>
        <DarkModeToggle className="" sizeparm={"icon"} />
        <DrawerContent>
          <MobileNavContent />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
