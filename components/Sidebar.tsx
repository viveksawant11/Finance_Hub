"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-6 py-4 px-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Finance Hub logo"
            className="size-[35px] max-xl:size-14"
          />
          <h1 className="sidebar-logo text-lg font-semibold">Finance Hub</h1>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

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
                  className={cn({ "brightness-[3] invert-0": isActive })}
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
    </section>
  );
};

export default Sidebar;
