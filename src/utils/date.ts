import { format } from "date-fns";

export function convertToDate(date: Date | string | number) {
    return format(date, "dd/MM/yyyy");
}

export function convertHoursToDate(hours: string | number, inputDate = new Date()) {
    const date = new Date(inputDate);
    if (typeof hours === "number") {
        date.setHours(hours);
        return date;
    }
    const splits = hours.split(":");
    const [hour, minute, ...second] = splits;
    date.setHours(parseInt(hour), parseInt(minute), typeof second === "number" ? parseInt(second) : 0);
    return date;
}
