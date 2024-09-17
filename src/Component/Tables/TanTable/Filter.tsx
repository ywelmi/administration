import { Column, Table } from "@tanstack/react-table";
import { useState } from "react";
import { DGender } from "../../../type/enum";
import { InputSelect } from "../../InputSelect";
// import { parseInt } from "lodash";
import ReactDatePicker from "react-datepicker";

function Filter<T, Q>({
  column,
  table,
}: {
  column: Column<T, Q>;
  table: Table<T>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex-col gap-1">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Từ...`}
        className="w-full border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Đến...`}
        className="w-full border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Tìm kiếm...`}
      className="w-full form-control"
    />
  );
}

const FilterGender = <T, Q>({
  column,
}: {
  column: Column<T, Q>;
  table: Table<T>;
}) => {
  const [state, setState] = useState("");
  const data = DGender.map((v, i) => ({ i, v }));
  return (
    <div style={{ minWidth: "124px" }}>
      <InputSelect
        data={data}
        value={state}
        name="gender"
        k={"v"}
        v={"i"}
        handleChange={({ target: { value } }) => {
          setState(value);
          const filterValue = parseInt(value);
          if (!isNaN(filterValue)) column.setFilterValue(filterValue);
          else {
            column.setFilterValue(undefined);
          }
        }}
      />
    </div>
  );
};

const FilterDate = <T, Q>({
  column,
}: {
  column: Column<T, Q>;
  table: Table<T>;
}) => {
  const [data, setData] = useState<string>();
  return (
    <div style={{ minWidth: "124px" }}>
      <ReactDatePicker
        className="form-control"
        name="date-picker"
        showYearDropdown
        isClearable
        // value={data ? convertToDate(data) : undefined}
        placeholderText="..."
        selected={data ? new Date(data) : undefined}
        onChange={(date) => {
          column.setFilterValue(date);
          setData(date?.toISOString());
        }}
        // locale={"vi"}
        // dateFormat={"dd/MM/yyyy"}
      />
    </div>
  );
};

export { Filter, FilterDate, FilterGender };
