import { toast } from "react-toastify";
import { TTablequalifying } from "../type/tablequalifying";
import { TTablequalifyingMatch, TTableQualifyingMember } from "../type/tablequalifyingMatch";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Lấy danh sách bảng đấu của 1 môn thi
export const tablequalifyingsGet = async (params = baseGetParams) => {
    return httpPost<IListResponse<TTablequalifying>>("/tablequalifyings/padding_filter", params);
};

export const tablequalifyingGet = (id: string) => {
    return httpGet(`/tablequalifyings/${id}`);
};

export const tablequalifyingMembersGet = (id: string) => {
    return httpGet<TTableQualifyingMember[]>(`/tablequalifyings/${id}/TableQualifyingMembers`);
};
export const sportExportProgressTableQualifying = async (id: string): Promise<void> => {
    try {
        const response = await httpGet(`/TableQualifyings/sport/${id}/export/rating/`, {
            responseType: "blob",
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `BangDau_${id}.xlsx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error: any) {
        console.error("Download failed:", error);
        toast.error("Xảy ra lỗi trong xuất bảng đấu: " + error.data);
    }
};

export const tablequalifyingCreate = (tablequalifying: Omit<TTablequalifying, "id">) => {
    return httpPost("/tablequalifyings", tablequalifying);
};

export const tablequalifyingUpdate = (tablequalifying: TTablequalifying) => {
    return httpPut(`/tablequalifyings/${tablequalifying.id}`, tablequalifying);
};

// Xóa bảng đấu theo id
export const tablequalifyingDelete = (id: string) => {
    return httpDel(`/tablequalifyings/${id}`);
};

export const tablequalifyingGen = (id: string) => {
    return httpPost<TTablequalifyingMatch[]>(`/tablequalifyings/${id}/auto_gen_match`, {});
};
