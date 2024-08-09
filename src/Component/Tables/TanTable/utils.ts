import { Row } from "@tanstack/react-table";
import { isEqual } from "date-fns";
export function dateFilter<T>(
    row: Row<T>,
    columnId: string,
    filterValue: string
) {
    if (!filterValue) return true;
    const rowData = row.original;
    const cell = rowData[columnId] as string;

    return isEqual(filterValue, cell);
}
