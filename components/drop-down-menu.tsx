"use client";
import { dropDown } from "@/utils/dropDown";
import { useState } from "react";

const DropDownMenu = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    dropDown(active, "main-menu");
    setActive(!active);
  }

  return (
    <a onClick={() => handleClick()} className="text-3xl">
      menu
    </a>
  );
};

export default DropDownMenu;
