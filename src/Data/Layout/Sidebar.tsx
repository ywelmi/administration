import { MenuItem } from "../../Types/Layout/Sidebar";

export const MenuList: MenuItem[] = [
  {
    title: "Quản trị",
    lanClass: "lan-1",
    Items: [
      {
        title: "Người dùng",
        id: 1,
        icon: "home",
        type: "sub",
        lanClass: "lan-3",
        children: [
          {
            path: "/user/list",
            title: "Danh sách người dùng",
            type: "link",
            lanClass: "lan-4",
          },
        ],
      },
    ],
  },
];
