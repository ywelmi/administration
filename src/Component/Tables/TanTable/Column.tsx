import { CellContext } from "@tanstack/react-table";
import React from "react";

const DefaultColumn = <T,>({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellContext<T, unknown>) => {
  const initialValue = getValue();
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      className="w-full form-control"
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export { DefaultColumn };
