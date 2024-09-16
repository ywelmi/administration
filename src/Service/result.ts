import { toast } from "react-toastify";
import { TSport } from "../type/sport";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPatch, httpPost, httpPut } from "./_request";
import axios from "axios";

// TODO: how to filter

export const sportXuatXepHang = async (id: string): Promise<void> => {
    try {
        const response = await httpPut(`sports/${id}/Rating`, {
            responseType: "blob",
        });
        if (response.status == 200) {
            try {
                const response = await httpGet(`sports/${id}/export/result`, {
                    responseType: "blob",
                });

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `XepHang_${id}.xlsx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error("Download failed:", error);
                toast.error("Xảy ra lỗi trong xuất kết quả xếp hạng theo môn: " + response.data);
            }
        }
    } catch (error) {
        console.error("Download failed:", error);
        toast.error("Xảy ra lỗi trong xuất kết quả xếp hạng:" + error);
    }
};

export const exportResultAll = async (type: string): Promise<void> => {
    try {
        const response = await httpPost(`competitions/6B427DEA-D7B0-467B-A4F3-544F4FD3856F/final-rating`, {});
        if (response.status == 200) {
            try {
                const response = await httpGet(`/competitions/6B427DEA-D7B0-467B-A4F3-544F4FD3856F/export/${type}`, {
                    responseType: "blob",
                });

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `XepHang_${type}.xlsx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (err) {
                console.error("Download failed:", err);
                toast.error("Xảy ra lỗi trong xuất kết quả xếp hạng toàn đoàn: " + response.data);
            }
        }
    } catch (error) {
        console.error("Download failed:", error);
        toast.error("Xảy ra lỗi trong xuất kết quả xếp hạng:" + error);
    }
};

export const getNumberTeam = async () => {
    return httpGet<any>(`competitions/6B427DEA-D7B0-467B-A4F3-544F4FD3856F/get_max_team_count`);
};
export const updateNumberTeam = async (maxTeam: number) => {
    return httpPatch<any>(`competitions/6B427DEA-D7B0-467B-A4F3-544F4FD3856F/maxteamcount`, {
        id: "6B427DEA-D7B0-467B-A4F3-544F4FD3856F",
        max_team_count: maxTeam,
    });
};
