"use client";

import { useRouter } from "next/navigation";
import DrawerCustom from "../common/Drawer";
const Header = () => {
  const nav = useRouter();
  return (
    <header className="p-4 sticky top-0 bg-black">
      <nav className="flex gap-2  md:justify-start justify-between items-center  ">
        <div className="logo uppercase font-bold basis-[20%] ">Logo</div>
        <ul className="hidden md:flex gap-4 items-center justify-end flex-1">
          <li
            className="bg-primary text-black py-1 px-2 rounded-[8px]"
            onClick={() => nav.push("/login")}
          >
            Login
          </li>
        </ul>
        <DrawerCustom
          title="Drawer"
          txt={"Menu"}
          description={<span>hello world</span>}
        />
      </nav>
    </header>
  );
};

export default Header;
