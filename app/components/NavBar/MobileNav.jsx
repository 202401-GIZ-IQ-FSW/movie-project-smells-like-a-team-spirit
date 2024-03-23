"use client";

import { Button } from "@/components/ui/button";
import MobileNavContent from "./MobileNavContent";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function MobileNav() {
  const side = "left";
  return (
    <div className="lg:hidden xl:hidden 2xl:hidden backdrop-blur-3xl fixed top-0 w-full bg-gradient-to-b from-primary-foreground to-transparent p-4 flex justify-between items-center">
      <Drawer className shouldScaleBackground>
        <DrawerTrigger asChild className="text-xl w-24 h-9 rounded-sm ">
          <Button variant="outline" size="icon">
            MENU
          </Button>
        </DrawerTrigger>
        <DarkModeToggle className="" sizeparm={"icon"} />
        <DrawerContent>
          <MobileNavContent />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
