"use client";

import HeaderTitle from "@/components/typography/header-title";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuChevronLeft, LuSearch } from "react-icons/lu";
import "./common-header.scss";

export default function CommonHeader({ transparent = false }) {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    switch (true) {
      case pathname === "/":
        setTitle("Featured");
        break;
      case pathname === "/playlists":
        setTitle("Playlists");
        break;
      case pathname === "/categories":
        setTitle("Categories");
        break;
      case /^\/album\/[a-zA-Z0-9]+$/.test(pathname):
        setTitle("Album");
        break;
      default:
        setTitle("");
    }
  }, [pathname]);

  return (
    <div className={`common-header ${transparent ? "transparent" : ""}`}>
      <header>
        <button className="header-button" onClick={() => router.back()}>
          <LuChevronLeft />
        </button>
        <HeaderTitle level={2}>{title}</HeaderTitle>
        <button className="header-button">
          <LuSearch />
        </button>
      </header>
    </div>
  );
}
