"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React from "react";

export default function Navbar() {
  return (
    <main className="flex justify-center mt-6">
      <NavigationMenu className="flex flex-row space-x-52 bg-zinc-950 p-3 border-2 border-[#1a1a1a] shadow-sm rounded-2xl">
        <div className="flex flex-row space-x-2 items-center">
          <img
            src="https://r2.guns.lol/guns_logo.png"
            alt=""
            width={"40px"}
            height={"40px"}
            className="border-2 rounded-full"
          />
          <p className="font-semibold">Mirai</p>
        </div>
        <NavigationMenuList className="flex flex-row space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle().concat(
                " border-2 border-[#1a1a1a]"
              )}
            >
              Getting started
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle().concat(
                " border-2 border-[#1a1a1a]"
              )}
            >
              Getting started
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle().concat(
                  " border-2 border-[#1a1a1a]"
                )}
              >
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
}
