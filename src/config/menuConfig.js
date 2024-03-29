const menuList = [
  {
    title: "欢迎",
    path: "/home",
    icon: "home",
  },

  {
    title: "轮播图信息",
    path: "/banner",
    icon: "picture",
  },
  {
    title: "用户管理",
    path: "/user",
    icon: "user",
    children: [
      { title: "创建用户", path: "/user/create" },
      { title: "用户列表", path: "/user/list" },
    ],
  },
  {
    title: "课程分类",
    path: "/classify",
    icon: "appstore",
    children: [
      { title: "分类列表", path: "/classify/" },
      { title: "path列表", path: "/classify/path" },
    ],
  },
  {
    title: "教师信息",
    path: "/teacher",
    icon: "team",
  },
  {
    title: "课程信息",
    path: "/course",
    icon: "team",
  },
];

export default menuList;
