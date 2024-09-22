import { sportFilterByUnitType } from "../../store/_utils";
import { useSportStore } from "../../store/sport";
import { DUnitType } from "../../type/enum";

export const useMenuList = () => {
    const { sports } = useSportStore();
    const menuList = [
        {
            Items: [
                {
                    title: "Quản trị",
                    icon: "fa fa-user",
                    lanClass: "lan-4",
                    children: [
                        {
                            title: "Người dùng",
                            type: "sub",
                            lanClass: "lan-3",
                            path: "/user/list",
                        },
                        {
                            title: "Phân quyền",
                            type: "sub",
                            lanClass: "lan-3",
                            // path: "/user/list",
                        },
                    ],
                },
                {
                    title: "Danh mục môn thi",
                    icon: "fa fa-th-list",
                    lanClass: "lan-4",
                    path: "/sport/list",
                    type: "sub",
                },
                {
                    title: "Danh mục đơn vị",
                    icon: "fa fa-flag",
                    lanClass: "lan-4",
                    path: "/org/list",
                    type: "link",
                },
                {
                    title: "Quản lý động viên",
                    icon: "fa fa-group",
                    lanClass: "lan-4",
                    path: "/teammember/list",
                    type: "link",
                },
                {
                    title: "Lực lượng thường trực",
                    icon: "icon-calendar",
                    lanClass: "lan-4",
                    unitType: "LLTT" as DUnitType,
                    children: [
                        {
                            path: "/team/list",
                            title: "Đăng ký",
                            type: "link",
                            lanClass: "lan-4",
                        },
                        ...(() => {
                            let filteredSports = sportFilterByUnitType(sports, "LLTT");
                            filteredSports = filteredSports.filter((s) => s.point_unit === 4);
                            return filteredSports.map((s) => {
                                return {
                                    path: `/tablequalifyings/list/${s.id}`,
                                    title: `${s.name}`,
                                    type: "link",
                                    lanClass: "lan-3",
                                };
                            });
                        })(),
                        // {
                        //   title: "Môn vòng bảng",
                        //   type: "link",
                        //   lanClass: "lan-3",
                        //   children: [
                        //     {
                        //       path: "/tablequalifyings/list",
                        //       title: "Vòng bảng",
                        //       type: "link",
                        //       lanClass: "lan-4",
                        //     },
                        //     {
                        //       path: "/tablequalifyings/knockout",
                        //       title: "Vòng loại",
                        //       type: "link",
                        //       lanClass: "lan-4",
                        //     },
                        //   ],
                        // },
                        {
                            path: "/martialart/list",
                            title: "Võ chiến đấu",
                            type: "link",
                            lanClass: "lan-4",
                        },
                        // {
                        //   title: "Môn loại trực tiếp",
                        //   type: "link",
                        //   lanClass: "lan-3",
                        //   children: [
                        //     {
                        //       path: "/martialart/list",
                        //       title: "Môn võ chiến đấu",
                        //       type: "link",
                        //       lanClass: "lan-4",
                        //     },
                        //   ],
                        // },
                        // {
                        //   path: "/lotsdraw/list/",
                        //   title: "Môn bốc thăm",
                        //   type: "link",
                        //   lanClass: "lan-4",
                        // },
                        ...(() => {
                            let filteredSports = sportFilterByUnitType(sports, "LLTT");
                            filteredSports = filteredSports.filter((s) => s.point_unit === 1 || s.point_unit === 2);
                            return filteredSports.map((s) => {
                                return {
                                    path: `/lotsdraw/list/${s.id}`,
                                    title: ` ${s.name}`,
                                    type: "link",
                                    lanClass: "lan-3",
                                };
                            });
                        })(),
                        // {
                        //   path: "/progress",
                        //   title: "Tiến độ thi đấu",
                        //   type: "link",
                        //   lanClass: "lan-4",
                        // },
                        {
                            path: "/reportresult",
                            title: "Biên bản",
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
                    title: "Dân quân tự vệ",
                    icon: "fa fa-th",
                    lanClass: "lan-4",
                    unitType: "DQTV" as DUnitType,
                    children: [
                        {
                            path: "/team/list",
                            title: "Đăng ký",
                            type: "link",
                            lanClass: "lan-4",
                        },
                        ...(() => {
                            let filteredSports = sportFilterByUnitType(sports, "DQTV");
                            filteredSports = filteredSports.filter((s) => s.point_unit === 4);
                            return filteredSports.map((s) => {
                                return {
                                    path: `/tablequalifyings/list/${s.id}`,
                                    title: `${s.name}`,
                                    type: "link",
                                    lanClass: "lan-3",
                                };
                            });
                        })(),
                        {
                            path: "/martialartmilitia",
                            title: "Võ chiến đấu DQTV",
                            type: "link",
                            lanClass: "lan-4",
                        },
                        ...(() => {
                            let filteredSports = sportFilterByUnitType(sports, "DQTV");
                            filteredSports = filteredSports.filter((s) => s.point_unit === 1);
                            return filteredSports.map((s) => {
                                return {
                                    path: `/lotsdraw/list/${s.id}`,
                                    title: `${s.name}`,
                                    type: "link",
                                    lanClass: "lan-3",
                                };
                            });
                        })(),
                        ...(() => {
                            let filteredSports = sportFilterByUnitType(sports, "DQTV");
                            filteredSports = filteredSports.filter(
                                (s) => s.point_unit === 2 && s.code != "danquan_vochiendau"
                            );
                            return filteredSports.map((s) => {
                                return {
                                    path: `/lotsdraw/list/${s.id}`,
                                    title: `${s.name}`,
                                    type: "link",
                                    lanClass: "lan-3",
                                };
                            });
                        })(),
                        // {
                        //   path: "/progress",
                        //   title: "Tiến độ thi đấu",
                        //   type: "link",
                        //   lanClass: "lan-4",
                        // },
                        {
                            path: "/reportresult",
                            title: "Biên bản",
                            type: "link",
                            lanClass: "lan-4",
                        },
                        // {
                        //   path: "/resultexport",
                        //   title: "Bảng xếp hạng",

                        //   type: "link",
                        //   lanClass: "lan-4",
                        // },
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
                    lanClass: "lan-4",
                    //path: "/teammember/list",
                    type: "link",
                    children: [
                        {
                            path: "/export/org/listathele",
                            title: "Đội thi",
                            type: "link",
                            lanClass: "lan-3",
                        },
                        // {
                        //     path: "/export/sport/type1",
                        //     title: "Mẫu VĐV 1",
                        //     type: "link",
                        //     lanClass: "lan-4",
                        // },
                        // {
                        //     path: "/export/sport/type2",
                        //     title: "Mẫu VĐV 2 ",
                        //     type: "link",
                        //     lanClass: "lan-3",
                        // },
                        {
                            path: "/export/sport/type3",
                            title: "Mẫu VĐV 3 ",
                            type: "link",
                            lanClass: "lan-3",
                        },
                    ],
                },
                {
                    title: "Giới thiệu",
                    icon: "fa fa-info",
                    lanClass: "lan-4",
                    //path: "/teammember/list",
                    type: "link",
                },
                {
                    path: "/resultexport",
                    title: "Bảng xếp hạng",
                    type: "link",
                    icon: "fa fa-th",
                    lanClass: "lan-4",
                },
            ],
        },
    ];

    return { menuList };
};
