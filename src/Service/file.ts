import { TFileItem } from "../type/file";
import { httpGet, httpPostForm } from "./_request";

export const uploadFile = (data: TFileItem) => {
  return httpPostForm<string>("/files", data);
};

export const getStoredFile = async (
  fileId: string,
) => {
  return httpGet(`/files/0/${fileId}`, {
    responseType: "blob",
  }).then((res) => {
    const imgUrl = URL.createObjectURL(res.data);
    return imgUrl;
  });
};

export const getSizedPhoto = async (
  fileId: string,
  height: number = 100,
) => {
  return httpGet(`/files/image/0/${fileId}?height=${height}`, {
    responseType: "blob",
  }).then((res) => {
    const imgUrl = URL.createObjectURL(res.data);
    return imgUrl;
  });
};
