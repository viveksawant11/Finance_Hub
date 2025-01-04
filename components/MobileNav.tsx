"use client";

import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white">
          <Link href="/" className="flex items-center gap-2 mb-6 py-4 px-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Finance Hub logo"
              className="size-[35px] max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Finance Hub
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {/* Sidebar Links */}
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn(
                        "sidebar-link flex items-center gap-3 p-2 rounded-md",
                        {
                          "bg-bank-gradient text-white": isActive,
                          "hover:bg-gray-100": !isActive,
                        }
                      )}
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          fill
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                      </div>
                      <p
                        className={cn("sidebar-label text-sm font-medium", {
                          "!text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
