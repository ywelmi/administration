import { DUnit, DUnitType } from "./enum";

export interface TSport {
  id: string;
  competition_id: string;
  code: string;
  name: string;
  competition_name?: string;
  for_type: typeof DUnit[DUnitType];
  // sum_type: number;
  // win_type: number;
  // index: number;
  // base_point?: number;
  point_unit: number;
  // for_type?: number;
}
