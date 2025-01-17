import _ from "lodash";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { baseGetParams, IGetFilters } from "../Service/_getParams";
import { DSportType, DUnit, DUnitType } from "../type/enum";
import { TSport } from "../type/sport";
import { useConfigStore } from "./config";

export type SportState = {
  filters?: Partial<IGetFilters>;
  sports: TSport[];
  sportsMain: TSport[];
  sportsSub: TSport[];
  total?: number;
  loading?: boolean;
  sportsAll: TSport[];
  addSports: (data: TSport[]) => void;
  addSportsMain: (data: TSport[]) => void;
  addSportsSub: (data: TSport[]) => void;
  addSport: (data: TSport) => void;
  updateSport: (data: TSport) => void;
  deleteSport: (id: string) => void;
  updateGetFilter: (filter: Partial<IGetFilters>) => void;
  updateTotal: (total: number) => void;
  updateLoading: (v: boolean) => void;
  updateSportType: (t: DSportType) => void;
  updateSportByUnitType: (t: DUnitType) => void;
  selectedSportId: string;
  selectSport: (v: string) => void;
};

const selector = (state: SportState): SportState => {
  const { unitType: uniteType } = useConfigStore.getState();

  // console.log({ allSports: state.sports });
  if (uniteType) {
    const filteredSports = state.sports.filter(
      (s) => s.for_type === DUnit[uniteType]
    );
    if (filteredSports) {
      return { ...state, sports: filteredSports, sportsAll: state.sports };
    }
  }
  return { ...state, sportsAll: state.sports };
};

const _useSportStore = create<SportState>()(
  immer((set) => ({
    selectedSportId: "",
    filters: baseGetParams,
    sports: [],
    sportsMain: [],
    sportsSub: [],
    sportsAll: [],
    addSports: (data: TSport[]) =>
      set((state: SportState) => {
        state.sports = data.sort((a: TSport, b: TSport) => {
          if (a.name > b.name) return 1;
          else if (b.name > a.name) return -1;
          return 0;
        });
      }),

    addSportsAll: (data: TSport[]) =>
      set((state: SportState) => {
        state.sports = [...data];
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
        const idx = state.sports.findIndex(
          ({ id: sportId }) => sportId === data.id
        );
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
    updateSportType(t) {
      // 1, 2 thì đều là bốc thăm nhé duy
      // 3 là môn võ
      // 4 là môn có vòng bảng,
      // 5 là chỉ đấu loại trực tiếp - tương đồng môn võ
      switch (t) {
        case DSportType.LotDraw:
          break;
        case DSportType.MartialArt:
          break;
        case DSportType.TableQualifying:
          break;
        case DSportType.PlayOff:
          break;
      }
    },
    updateSportByUnitType(t) {
      set((state: SportState) => {
        state.sports = state.sportsAll.filter((s) => s.for_type === DUnit[t]);
      });
    },
    selectSport: (v: string) => {
      set((state: SportState) => {
        state.selectedSportId = v;
        localStorage.setItem("selectedSportId", v);
      });
    },
  }))
);
// export const useSportStore = () => _useSportStore(selector);
export const useSportStore = _useSportStore;
