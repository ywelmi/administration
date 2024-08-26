import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TOrg } from "../type/org";

export type OrgState = {
    orgs: TOrg[];
    addOrgs: (data: TOrg[]) => void;
    addOrg: (data: TOrg) => void;
    updateOrg: (data: TOrg) => void;
    deleteOrg: (id: string) => void;
};

export const useOrgStore = create<OrgState>()(
    immer((set) => ({
        orgs: [],
        addOrgs: (data: TOrg[]) =>
            set((state: OrgState) => {
                state.orgs = data.sort((a: TOrg, b: TOrg) => {
                    if (a.name > b.name) return 1;
                    else if (b.name > a.name) return -1;
                    return 0;
                });
            }),
        addOrg: (data: TOrg) =>
            set((state: OrgState) => {
                state.orgs.push(data);
            }),
        updateOrg: (data: TOrg) =>
            set((state: OrgState) => {
                const idx = state.orgs.findIndex(({ id: orgId }) => orgId === data.id);
                if (idx > -1) {
                    state.orgs[idx] = data;
                }
            }),
        deleteOrg: (id: string) =>
            set((state: OrgState) => {
                const idx = state.orgs.findIndex(({ id: orgId }) => orgId === id);
                if (idx > -1) {
                    state.orgs.splice(idx, 1);
                }
            }),
    }))
);
