import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TTablequalifying } from "../type/tablequalifying";
import { baseGetParams, IGetFilters } from "../Service/_getParams";
import _ from "lodash";

export type TablequalifyingState = {
  filters?: Partial<IGetFilters>;
  tablequalifyings: TTablequalifying[];
  total?: number;
  loading?: boolean;
  addTablequalifyings: (data: TTablequalifying[]) => void;
  addTablequalifying: (data: TTablequalifying) => void;
  updateTablequalifying: (data: TTablequalifying) => void;
  deleteTablequalifying: (id: string) => void;
  updateGetFilter: (filter: Partial<IGetFilters>) => void;
  updateTotal: (total: number) => void;
  updateLoading: (v: boolean) => void;
};

export const useTablequalifyingStore = create<TablequalifyingState>()(
  immer((set) => ({
    filters: baseGetParams,
    tablequalifyings: [],
    addTablequalifyings: (data: TTablequalifying[]) =>
      set((state: TablequalifyingState) => {
        state.tablequalifyings = data;
      }),
    addTablequalifying: (data: TTablequalifying) =>
      set((state: TablequalifyingState) => {
        state.tablequalifyings.push(data);
      }),
    updateTablequalifying: (data: TTablequalifying) =>
      set((state: TablequalifyingState) => {
        const idx = state.tablequalifyings.findIndex((
          { id: tablequalifyingId },
        ) => tablequalifyingId === data.id);
        if (idx > -1) {
          state.tablequalifyings[idx] = data;
        }
      }),
    deleteTablequalifying: (id: string) =>
      set((state: TablequalifyingState) => {
        const idx = state.tablequalifyings.findIndex((
          { id: tablequalifyingId },
        ) => tablequalifyingId === id);
        if (idx > -1) {
          state.tablequalifyings.splice(idx, 1);
        }
      }),
    updateGetFilter: (filter: Partial<IGetFilters>) => {
      set((state: TablequalifyingState) => {
        const newFilter = { ...state.filters, ...filter };
        if (_.isEqual(state.filters, newFilter)) return;
        state.filters = newFilter;
      });
    },
    updateTotal: (total: number) => {
      set((state: TablequalifyingState) => {
        state.total = total;
      });
    },

    updateLoading(v: boolean) {
      set((state: TablequalifyingState) => {
        state.loading = v;
      });
    },
  })),
);
