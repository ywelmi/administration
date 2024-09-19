import { toast } from "react-toastify";
import { TSport } from "../type/sport";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter

export const sportsGet = async (params = baseGetParams) => {
    return httpPost<IListResponse<TSport>>("/sports/padding_filter", params);
};

export const sportGet = (id: string) => {
    return httpGet(`/sports/${id}`);
};

export const sportCreate = (sport: Omit<TSport, "id">) => {
    return httpPost("/sports", sport);
};

export const sportUpdate = (sport: TSport) => {
    return httpPut(`sports/${sport.id}`, sport);
};

export const sportDelete = (id: string) => {
    return httpDel(`sports/${id}`);
};
export const sportXuatPhieuDiem = async (id: string): Promise<void> => {
    try {
        const response = await httpGet(`sports/${id}/export/transcript`, {
            responseType: "blob",
        });
        if (response.status == 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `BienBanThiDau_${id}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.error(response.data);
        }
    } catch (error: any) {
        console.error("Download failed:", error);
        toast.error("Xuất biên bản thi đấu lỗi: " + error.data.toString());
    }
};
export const sportXuatPhieuKhoaTham = async (id: string): Promise<void> => {
    try {
        const response = await httpGet(`sports/${id}/export/ticket`, {
            responseType: "blob",
        });

        if (response.status == 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `PhieuKhoaTham_${id}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.error(response.data);
        }
    } catch (error: any) {
        console.error("Download failed:", error);
        toast.error("Xuất phiếu khóa thăm lỗi: " + error.data.toString());
    }
};

export const sportexportschedulereport = async (id: string): Promise<void> => {
    try {
        const response = await httpGet(`sports/${id}/export/match-schedule`, {
            responseType: "blob",
        });

        if (response.status == 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `LichThiDau_${id}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.error(response.data);
        }
    } catch (error: any) {
        console.error("Download failed:", error);
        toast.error("Xuất lịch thi đấu lỗi:" + error.data.toString());
    }
};
export const sportXuatXepHang = async (id: string): Promise<void> => {
    try {
        const response = await httpGet(`sports/${id}/export/result`, {
            responseType: "blob",
        });

        if (response.status == 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `BangXepHang_${id}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.error(response.data);
        }
    } catch (error: any) {
        console.error("Download failed:", error);
        toast.error("Xảy ra lỗi trong xuất kết quả xếp hạng" + error.data.toString());
    }
};

export const sportNameUpdate = (sport: TSport) => {
    const { id, name } = sport;
    return httpPut(`sports/${sport.id}/UpdateSportName`, { id, name });
};

export const sportLocationUpdate = (sport: TSport) => {
    const { id, sport_location } = sport;
    return httpPut(`sports/${sport.id}/UpdateSportLocation`, {
        id,
        sport_location,
    });
};
