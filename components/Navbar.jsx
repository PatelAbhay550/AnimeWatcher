import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0  backdrop-blur-sm gap-4 text-3xl bg-white/30 w-full h-12 z-40 flex items-center justify-center">
      <Image src="/logo.svg" width={40} height={40} alt="logo" />
      <h1>Anime Watcher</h1>
    </div>
  );
};

export default Navbar;
