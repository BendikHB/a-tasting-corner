export function dropDown(active: boolean, id?: string, idList?: string[]) {
  if (id) {
    const element = document.getElementById(id);
    if (element)
      active
        ? (element.style.display = "block")
        : (element.style.display = "none");
  }
  if (!id && !active && idList) {
    idList.forEach((c) => {
      const el = document.getElementById(c);
      if (el) el.style.display = "none";
    });
  }
}
