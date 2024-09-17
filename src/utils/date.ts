export function convertToDate(date: Date | string | number) {
  try {
    // return format(date, "dd/MM/yyyy");
    return new Date(date).toLocaleDateString();
  } catch (err) {
    console.log({ err, date });
  }
}

export function convertHoursToDate(
  hours: string | number,
  inputDate = new Date()
) {
  const date = new Date(inputDate);
  if (typeof hours === "number") {
    date.setHours(hours);
    return date;
  }
  const splits = hours.split(":");
  const [hour, minute, ...second] = splits;
  date.setHours(
    parseInt(hour),
    parseInt(minute),
    typeof second === "number" ? parseInt(second) : 0
  );
  return date;
}
