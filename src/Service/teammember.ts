import { TTeammember } from "../type/teammember";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const teammembersGet = async (params = baseGetParams) => {
  return httpPost<IListResponse<TTeammember>>("/teammembers/padding_filter", {
    ...params,
  });
};

export const teammemberGet = (id: string) => {
  return httpGet(`/teammembers/${id}`);
};

export const teammemberCreate = (teammember: Omit<TTeammember, "id">) => {
  return httpPost("/teammembers", teammember);
};

export const teammemberUpdate = (teammember: TTeammember) => {
  return httpPut(`teammembers/${teammember.id}`, teammember);
};

export const teammemberDelete = (id: string) => {
  return httpDel(`teammembers/${id}`);
};

export const teammembersByContent = (sportId: string, contentId: string) => {
  return httpGet<TTeammember[]>(
    `/teammembers/ListMemberByContentId?sportID=${sportId}&contentID=${contentId}`,
  );
};

export const getTeammemberPhoto = async (
  fileId: string,
  height: number = 100,
) => {
  return httpGet(`/files/image/5/${fileId}?height=${height}`, {
    responseType: "blob",
  }).then((res) => {
    const imgUrl = URL.createObjectURL(res.data);
    return { url: imgUrl, data: res.data };
  });
};
