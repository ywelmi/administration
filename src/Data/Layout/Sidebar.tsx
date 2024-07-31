import { DUnitType } from "../../type/enum";

export const useMenuList = () => {
  const menuList = [
    {
      Items: [
        {
          title: "Quản trị người dùng",
          icon: "fa fa-user",
          lanClass: "lan-1",
          children: [
            {
              title: "Người dùng",
              type: "sub",
              lanClass: "lan-3",
              path: "/user/list",
            },
            {
              title: "Phân quyền - Not",
              type: "sub",
              lanClass: "lan-3",
              // path: "/user/list",
            },
          ],
        },
        {
          title: "Danh mục môn thi",
          icon: "fa fa-th-list",
          lanClass: "lan-1",
          path: "/sport/list",
          type: "sub",
        },
        {
          title: "Danh mục đơn vị",
          icon: "fa fa-flag",
          lanClass: "lan-1",
          path: "/org/list",
          type: "link",
        },
        {
          title: "Nhập vận động viên cho đơn vị",
          icon: "fa fa-group",
          lanClass: "lan-1",
          path: "/teammember/list",
          type: "link",
        },
        {
          title: "Lực lượng thường trực",
          icon: "icon-calendar",
          lanClass: "lan-1",
          unitType: "LLTT" as DUnitType,
          children: [
            {
              path: "/team/list",
              title: "Đăng ký thi",
              type: "link",
              lanClass: "lan-4",
            },
            {
              title: "Môn vòng bảng",
              type: "link",
              lanClass: "lan-3",
              children: [
                {
                  path: "/tablequalifyings/list",
                  title: "Vòng bảng",
                  type: "link",
                  lanClass: "lan-4",
                },
                {
                  path: "/tablequalifyings/knockout/:sport_id",
                  title: "Vòng loại",
                  type: "link",
                  lanClass: "lan-4",
                },
              ],
            },
            {
              path: "/martialart/list",
              title: "Môn võ chiến đấu",
              type: "link",
              lanClass: "lan-4",
            },
            {
              path: "/lotsdraw/list/",
              title: "Môn bốc thăm",
              type: "link",
              lanClass: "lan-4",
            },
            // {
            //   path: "/progress",
            //   title: "Tiến độ thi đấu",
            //   type: "link",
            //   lanClass: "lan-4",
            // },
            {
              path: "/reportresult",
              title: "Xuất phiếu điểm",
              type: "link",
              lanClass: "lan-4",
            },
            {
              path: "/resultexport",
              title: "Bảng xếp hạng",

              type: "link",
              lanClass: "lan-4",
            },
            // {
            //   path: "#",
            //   title: "Nhập điểm - Not",
            //   type: "link",
            //   lanClass: "lan-4",
            // },
          ],
        },
        {
          title: "Lực lượng Dân quân tự vệ",
          icon: "fa fa-th",
          lanClass: "lan-1",
          unitType: "DQTV" as DUnitType,
          children: [
            {
              //path: "/team/list",
              title: "Đăng ký thi",
              type: "link",
              lanClass: "lan-4",
            },
            {
              title: "Môn vòng bảng",
              type: "link",
              lanClass: "lan-3",
              children: [
                {
                  //path: "/tablequalifyings/list",
                  title: "Vòng bảng",
                  type: "link",
                  lanClass: "lan-4",
                },
                {
                  //path: "/tablequalifyings/knockout/:sport_id",
                  title: "Vòng loại",
                  type: "link",
                  lanClass: "lan-4",
                },
              ],
            },
            {
              //path: "/lotsdraw/list/",
              title: "Môn bốc thăm",
              type: "link",
              lanClass: "lan-4",
            },
            // {
            //   path: "/progress",
            //   title: "Tiến độ thi đấu",
            //   type: "link",
            //   lanClass: "lan-4",
            // },
            {
              // path: "/reportresult",
              title: "Xuất phiếu điểm",
              type: "link",
              lanClass: "lan-4",
            },
            {
              //path: "/resultexport",
              title: "Bảng xếp hạng",

              type: "link",
              lanClass: "lan-4",
            },
            // {
            //   path: "#",
            //   title: "Nhập điểm - Not",
            //   type: "link",
            //   lanClass: "lan-4",
            // },
          ],
        },
        {
          title: "Báo cáo ",
          icon: "fa fa-file",
          lanClass: "lan-1",
          //path: "/teammember/list",
          type: "link",
          children: [
            {
              //path: "/team/list",
              title: "Môn thi",
              type: "link",
              lanClass: "lan-4",
            },
            {
              title: "Đơn vị",
              type: "link",
              lanClass: "lan-3",
            },
            {
              //path: "/lotsdraw/list/",
              title: "Vận động viên",
              type: "link",
              lanClass: "lan-4",
            },
          ],
        },
        {
          title: "Giới thiệu",
          icon: "fa fa-info",
          lanClass: "lan-1",
          //path: "/teammember/list",
          type: "link",
        },
      ],
    },
  ];

  return { menuList };
};
