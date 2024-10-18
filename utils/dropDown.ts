export function dropDown(
  active: boolean,
  id?: string,
  idList?: string[],
  transition?: number,
) {
  if (id) {
    const element = document.getElementById(id);
    if (element && transition) {
      element.style.transition = `all ${transition}ms`;
      if (active) {
        element.style.height = "100dvh";
        element.style.opacity = "1";
      }
      if (!active) {
        element.style.opacity = "0";
        element.style.height = "0";
      }
    } else if (element) {
      active
        ? (element.style.display = "block")
        : (element.style.display = "none");
    }
  }
  if (!id && !active && idList) {
    idList.forEach((c) => {
      const el = document.getElementById(c);
      if (el) el.style.display = "none";
    });
  }
}
