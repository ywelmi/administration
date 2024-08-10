import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TMartialArtMilitiaArmyGroupGet } from "../type/martialArtMilitia";

export type MartialArtMilitiaState = {
    MartialArtMilitias: TMartialArtMilitiaArmyGroupGet[];
    addMartialArtMilitias: (data: TMartialArtMilitiaArmyGroupGet[]) => void;
    addMartialArtMilitia: (data: TMartialArtMilitiaArmyGroupGet) => void;
    updateMartialArtMilitia: (data: TMartialArtMilitiaArmyGroupGet) => void;
    deleteMartialArtMilitia: (id: string) => void;
};

export const useMartialArtMilitiaStore = create<MartialArtMilitiaState>()(
    immer((set) => ({
        MartialArtMilitias: [],
        addMartialArtMilitias: (data: TMartialArtMilitiaArmyGroupGet[]) =>
            set((state: MartialArtMilitiaState) => {
                state.MartialArtMilitias = data;
            }),
        addMartialArtMilitia: (data: TMartialArtMilitiaArmyGroupGet) =>
            set((state: MartialArtMilitiaState) => {
                state.MartialArtMilitias.push(data);
            }),
        updateMartialArtMilitia: (data: TMartialArtMilitiaArmyGroupGet) =>
            set((state: MartialArtMilitiaState) => {
                const idx = state.MartialArtMilitias.findIndex(
                    ({ id: MartialArtMilitiaId }) => MartialArtMilitiaId === data.id
                );
                if (idx > -1) {
                    state.MartialArtMilitias[idx] = data;
                }
            }),
        deleteMartialArtMilitia: (id: string) =>
            set((state: MartialArtMilitiaState) => {
                const idx = state.MartialArtMilitias.findIndex(
                    ({ id: MartialArtMilitiaId }) => MartialArtMilitiaId === id
                );
                if (idx > -1) {
                    state.MartialArtMilitias.splice(idx, 1);
                }
            }),
    }))
);
