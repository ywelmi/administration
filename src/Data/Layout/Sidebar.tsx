import { useTablequalifyingMatchStore } from "../../store/tablequalifyingMatch";

// const orgList =[    {
//       title: "Quản trị",
//       lanClass: "lan-1",
//       Items: [
//         {
//           title: "Người dùng",
//           id: 1,
//           icon: "home",
//           type: "sub",
//           lanClass: "lan-3",
//           children: [
//             {
//               path: "/user/list",
//               title: "Danh sách người dùng",
//               type: "link",
//               lanClass: "lan-4",
//             },
//           ],
//         },
//         {
//           title: "Đơn vị",
//           id: 1,
//           icon: "home",
//           type: "sub",
//           lanClass: "lan-3",
//           children: [
//             {
//               path: "/org/list",
//               title: "Danh sách đơn vị",
//               type: "link",
//               lanClass: "lan-4",
//             },
//           ],
//         },
//         {
//           title: "Thi đấu",
//           id: 1,
//           icon: "home",
//           type: "sub",
//           lanClass: "lan-3",
//           children: [
//             {
//               path: "/team/list",
//               title: "Đăng ký thi",
//               type: "link",
//               lanClass: "lan-4",
//             },
//             {
//               path: "/sport/list",
//               title: "Môn thi",
//               type: "link",
//               lanClass: "lan-4",
//             },
//             {
//               path: "/teammember/list",
//               title: "Vận động viên",
//               type: "link",
//               lanClass: "lan-4",
//             },
//             {
//               path: "/tablequalifyings/list",
//               title: "Bảng thi đấu",
//               type: "link",
//               lanClass: "lan-4",
//             },
//             // {
//             //   path: "/tablequalifyings/match/",
//             //   title: "Lịch thi đấu",
//             //   type: "link",
//             //   lanClass: "lan-4",
//             // },
//           ],
//         },
//       ],
//     },
// ]
export const useMenuList = () => {
  // const { table_id } = useTablequalifyingMatchStore();
  const menuList = [
    {
      // title: "Quản trị",
      // lanClass: "lan-1",
      Items: [
        {
          path: "/user/list",
          title: "Danh sách người dùng",
          type: "link",
          lanClass: "lan-4",
        },
        {
          path: "/org/list",
          title: "Danh sách đơn vị",
          type: "link",
          lanClass: "lan-4",
        },
        ,
        {
          path: "/team/list",
          title: "Đăng ký thi",
          type: "link",
          lanClass: "lan-4",
        },
        {
          path: "/sport/list",
          title: "Môn thi",
          type: "link",
          lanClass: "lan-4",
        },
        {
          path: "/teammember/list",
          title: "Vận động viên",
          type: "link",
          lanClass: "lan-4",
        },
        {
          path: "/tablequalifyings/list",
          title: "Bảng thi đấu",
          type: "link",
          lanClass: "lan-4",
        },
      ],
    },
  ];
  return { menuList };
};
