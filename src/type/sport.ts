export interface TSport {
  id: string;
  competition_id: string;
  code: string;
  name: string;
  sum_type: number;
  win_type: number;
  index: number;
  base_point?: number;
  point_unit: 1;
  for_type?: number;
}
