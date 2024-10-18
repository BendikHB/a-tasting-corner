"use client";
import { dropDown } from "@/utils/dropDown";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import menu from "../public/lottie/menu.json";

const DropDownMenu = () => {
  const [active, setActive] = useState(false);

  const animRef = useRef(null);

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
