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
            path: `/user`,
            title: "Danh sách",
            type: "link",
            lanClass: "lan-4",
          },
          {
            path: `/dashboard/ecommerce`,
            title: "Tạo mới",
            type: "link",
            lanClass: "lan-5",
          },
          {
            path: `/dashboard/ecommerce`,
            title: "Xem, sửa",
            type: "link",
            lanClass: "lan-5",
          },
          {
            path: `/dashboard/onlinecourse`,
            title: "Xóa",
            type: "link",
          },
        ],
      },
      {
        title: "Widgets",
        id: 2,
        icon: "widget",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Page layout",
        id: 3,
        icon: "layout",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/pagelayout/hidenavscroll`,
            title: "Hide Nav Scroll",
            type: "link",
          },
        ],
      },
    ],
  },
];
