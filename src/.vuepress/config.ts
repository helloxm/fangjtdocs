import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/fangjtdocs/",

  lang: "zh-CN",
  title: "随笔",
  description: "学习与感悟",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
