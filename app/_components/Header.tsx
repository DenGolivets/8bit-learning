"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { courses } from "@/data/navbar";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <Link href="/" className="flex gap-2 items-center">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h2 className="font-medium text-3xl font-game">8bit-Courses</h2>
      </Link>

      {/* Navbar */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="p-3 hover:bg-accent rounded-xl cursor-pointer"
                  >
                    <h2 className="font-medium">{course.name}</h2>
                    <p className="text-sm text-gray-500">{course.desc}</p>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/contact-us"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Signup Button */}
      {!user ? (
        <Link href="/sign-in">
          <Button
            variant={"pixel"}
            className="font-game text-2xl cursor-pointer"
          >
            Signup
          </Button>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            variant={"pixel"}
            className="font-game text-2xl cursor-pointer"
          >
            Dashboard
          </Button>

          <UserButton />
        </div>
      )}
    </div>
  );
};

export default Header;
