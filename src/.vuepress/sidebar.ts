import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/PLC/": [
    {
      text: "PLC",
      icon: "laptop-code",
      children: "structure",
      collapsible: true,
    },
  ],
  "/REX/": [
    {
      text: "REX",
      icon: "laptop-code",
      children: "structure",
      collapsible: true,
    },
  ],
});
