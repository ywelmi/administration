import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TSport } from "../type/sport";
import { baseGetParams, IGetFilters } from "../Service/_getParams";
import _ from "lodash";

export type SportState = {
    filters?: Partial<IGetFilters>;
    sports: TSport[];
    sportsMain: TSport[];
    sportsSub: TSport[];
    total?: number;
    loading?: boolean;
    addSports: (data: TSport[]) => void;
    addSportsMain: (data: TSport[]) => void;
    addSportsSub: (data: TSport[]) => void;
    addSport: (data: TSport) => void;
    updateSport: (data: TSport) => void;
    deleteSport: (id: string) => void;
    updateGetFilter: (filter: Partial<IGetFilters>) => void;
    updateTotal: (total: number) => void;
    updateLoading: (v: boolean) => void;
};

export const useSportStore = create<SportState>()(
    immer((set) => ({
        filters: baseGetParams,
        sports: [],
        sportsMain: [],
        sportsSub: [],
        addSports: (data: TSport[]) =>
            set((state: SportState) => {
                state.sports = data;
            }),
        addSportsSub: (data: TSport[]) =>
            set((state: SportState) => {
                state.sportsSub = data;
            }),
        addSportsMain: (data: TSport[]) =>
            set((state: SportState) => {
                state.sportsMain = data;
            }),
        addSport: (data: TSport) =>
            set((state: SportState) => {
                state.sports.push(data);
            }),

        updateSport: (data: TSport) =>
            set((state: SportState) => {
                const idx = state.sports.findIndex(({ id: sportId }) => sportId === data.id);
                if (idx > -1) {
                    state.sports[idx] = data;
                }
            }),
        deleteSport: (id: string) =>
            set((state: SportState) => {
                const idx = state.sports.findIndex(({ id: sportId }) => sportId === id);
                if (idx > -1) {
                    state.sports.splice(idx, 1);
                }
            }),
        updateGetFilter: (filter: Partial<IGetFilters>) => {
            set((state: SportState) => {
                const newFilter = { ...state.filters, ...filter };
                if (_.isEqual(state.filters, newFilter)) return;
                state.filters = newFilter;
            });
        },
        updateTotal: (total: number) => {
            set((state: SportState) => {
                state.total = total;
            });
        },

        updateLoading(v: boolean) {
            set((state: SportState) => {
                state.loading = v;
            });
        },
    }))
);
