import { Column, Table } from "@tanstack/react-table";
import { InputSelect } from "../../InputSelect";
import { DGender } from "../../../type/enum";
import { useState } from "react";
// import { parseInt } from "lodash";
import ReactDatePicker from "react-datepicker";

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number"
    ? (
      <div className="flex-col gap-1">
        <input
          type="number"
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [
              e.target.value,
              old?.[1],
            ])}
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
            ])}
          placeholder={`Đến...`}
          className="w-full border shadow rounded"
        />
      </div>
    )
    : (
      <input
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={`Tìm kiếm...`}
        className="w-full form-control"
      />
    );
}

const FilterGender = ({
  column,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) => {
  const [state, setState] = useState("");
  const data = DGender.map((v, i) => ({ i, v }));
  return (
    <div style={{ "minWidth": "124px" }}>
      <InputSelect
        data={data}
        value={state}
        name="gender"
        k={"v"}
        v={"i"}
        handleChange={({ target: { value } }) => {
          setState(value);
          column.setFilterValue(value);
        }}
      />
    </div>
  );
};

const FilterDate = ({
  column,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) => {
  return (
    <div style={{ "minWidth": "124px" }}>
      <ReactDatePicker
        className="form-control"
        name="date-picker"
        showYearDropdown
        // selected={new Date(original.match_date as string || new Date())}
        // value={original.match_hour}
        onChange={(date) => column.setFilterValue(date)}
        locale={"vi"}
        dateFormat={"dd/MM/yyyy"}
      />
    </div>
  );
};

export { Filter, FilterDate, FilterGender };
