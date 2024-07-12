import { format } from "date-fns";

export function convertToDate(date: Date | string | number) {
  return format(date, "dd/MM/yyyy");
}
