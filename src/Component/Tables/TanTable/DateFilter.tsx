import { Column, Table } from "@tanstack/react-table";
import { useState } from "react";
import { DGender } from "../../../type/enum";

const DateFilter = ({
  column,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) => {
  const [state, setState] = useState("");
  const data = DGender.map((v, i) => ({ i, v }));
  return (
    <div style={{ minWidth: "124px" }}>
      <ReactDatePicker
        className="form-control"
        name="match_hour"
        // selected={new Date(original.match_date as string || new Date())}
        value={original.match_hour}
        onChange={(date) =>
          table.options.meta?.updateData(
            index,
            id,
            `${date?.getHours()}:${date?.getMinutes()}`
          )
        }
        showTimeSelect
        showTimeSelectOnly
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Giờ"
        // locale={"vi"}
      />
    </div>
  );
};
