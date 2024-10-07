import { useEffect, useRef } from "react";

let HandleClickOutside = (handler: any) => {
  let domNode = useRef(null);

  useEffect(() => {
    let innderHandler = (event: any) => {
      // @ts-ignore
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", innderHandler);

    return () => {
      document.removeEventListener("mousedown", innderHandler);
    };
  });

  return domNode;
};

export default HandleClickOutside;
