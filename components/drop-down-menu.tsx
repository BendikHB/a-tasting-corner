"use client";
import { dropDown } from "@/utils/dropDown";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import menu from "../public/lottie/menu.json";
import { usePathname } from "next/navigation";

const DropDownMenu = () => {
  const [active, setActive] = useState(false);
  const animRef = useRef(null);
  const pathname = usePathname();

  function handleClick() {
    //@ts-ignore
    if (active) animRef.current.playSegments([30, 85]);
    //@ts-ignore
    if (!active) animRef.current.playSegments([100, 170]);
    dropDown(active, "main-menu", undefined, 500);
    setActive(!active);
  }
  const initalLoad = () => {
    //@ts-ignore
    animRef.current.stop();
    setActive(!active);
  };
  useEffect(() => {
    initalLoad();
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 768 && pathname !== "/") {
      handleClick();
    }
  }, [pathname]);

  return (
    <a onClick={() => handleClick()} className="text-2xl md:hidden">
      <Lottie
        ref={animRef}
        animationData={menu}
        speed={1}
        loop={false}
        style={{ height: "40px", width: "100%" }}
        goTo={170}
      />
      menu
    </a>
  );
};

export default DropDownMenu;
