"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { petrona } from "@/utils/fonts"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <Link href="#about" scroll legacyBehavior passHref>
            <NavigationMenuLink className={`fontFamily ${navigationMenuTriggerStyle()}`}>
                About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="#skills" scroll legacyBehavior passHref>
            <NavigationMenuLink className={`fontFamily ${navigationMenuTriggerStyle()}`}>
                Skills
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#projects" scroll legacyBehavior passHref>
            <NavigationMenuLink className={`fontFamily ${navigationMenuTriggerStyle()}`}>
              Projects & Collaboration
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}
