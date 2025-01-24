"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  return (
    <section className="auth-form">
      <header className="flex flex-col">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
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

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign-In" : "Sign Up"}
          </h1>
        </div>
      </header>
    </section>
  );
};

export default AuthForm;
