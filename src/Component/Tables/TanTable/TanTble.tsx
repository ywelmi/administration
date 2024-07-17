import {
  CSSProperties,
  forwardRef,
  HTMLProps,
  ReactElement,
  Ref,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Row,
  RowData,
  RowSelectionState,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

import _ from "lodash";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    getRowStyles: (row: Row<TData>) => CSSProperties;
  }
}

interface ITable<T> {
  showAction?: boolean;
  selectableRows?: boolean;
  onSelectedRowsChange?: (
    v: { allSelected: boolean; selectedCount: number; selectedRows: T[] },
  ) => void;
  columns: ColumnDef<T>[];
  data?: T[];
  selectableRowSelected?: (row: T) => boolean; // pre selected rows condition
  getRowId: (r: T) => string;
}

function useSkipper() {
  const shouldSkipRef = React.useRef(true);
  const shouldSkip = shouldSkipRef.current;

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = React.useCallback(() => {
    shouldSkipRef.current = false;
  }, []);

  React.useEffect(() => {
    shouldSkipRef.current = true;
  });

  return [shouldSkip, skip] as const;
}
function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
function getDefaultColumn<T>() {
  return {
    cell: ({ getValue, row: { index }, column: { id }, table }) => {
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
          value={value as string}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
        />
      );
    },
  } as Partial<ColumnDef<T>>;
}

function getSelectableColumn<T>() {
  return {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  } as ColumnDef<T>;
}

export interface ITanTableRef<T> {
  getData: () => T[];
}

const TanTableComponent = <T,>({
  data: srcData = [],
  // onRowSelect,
  onSelectedRowsChange,
  getRowId,
  columns,
  selectableRowSelected,
}: ITable<T>, ref: Ref<ITanTableRef<T>>) => {
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();
  const [data, setData] = useState(srcData);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
    (selectableRowSelected && getRowId)
      ? srcData.reduce((p, c) => ({
        ...p,
        [getRowId?.(c)]: selectableRowSelected(c),
      }), {})
      : {},
  );

  useImperativeHandle(ref, () => ({
    getData: () => data,
  }), [data]);

  const tableColumns = useMemo<ColumnDef<T>[]>(() => {
    let cols = [...columns];
    if (onSelectedRowsChange) {
      cols = [getSelectableColumn(), ...cols];
    }
    return cols;
  }, [columns]);

  useEffect(() => {
    setData(srcData);
  }, [srcData]);

  useEffect(
    () => {
      const selectedRowIds = (Object.keys(rowSelection)).filter(
        (id) => rowSelection[id],
      );

      const selectedRows = data.filter((row) =>
        selectedRowIds.includes(getRowId(row))
      );

      onSelectedRowsChange?.(
        {
          allSelected: selectedRows.length === data.length,
          selectedCount: selectedRows.length,
          selectedRows: selectedRows as T[],
        },
      );
    },
    [rowSelection],
  );

  const table = useReactTable({
    data,
    columns: tableColumns,
    defaultColumn: getDefaultColumn<T>(),
    getRowId: getRowId,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    // onStateChange
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex();
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
      getRowStyles: (row) => ({
        background: (() => {
          let same = false;
          const tableRow = row.original;
          const srcRecord = srcData.find((d) =>
            getRowId(d) === getRowId(tableRow)
          );
          if (!srcRecord) same = false;
          else same = _.isEqual(tableRow, srcRecord);
          return same ? "#fafafa" : "#fff";
        })(),
      }),
    },
    debugTable: true,
  });

  const rerender = React.useReducer(() => ({}), {})[1];
  const refreshData = () => setData([...srcData]);

  return (
    <div>
      <div>
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 font-lg shadow border border-block"
          placeholder="Tìm kiếm"
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanFilter()
                          ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          )
                          : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} style={table.options.meta?.getRowStyles(row)}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </div>
  );
};
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
      <div
        className="flex space-x-2"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="number"
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [
              e.target.value,
              old?.[1],
            ])}
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <input
          type="number"
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [
              old?.[0],
              e.target.value,
            ])}
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
    )
    : (
      <input
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={`Search...`}
        className="w-36 border shadow rounded"
      />
    );
}

export type TTanTable = <T>(
  p: ITable<T> & { ref?: Ref<ITanTableRef<T>> },
) => ReactElement;
const TanTable = forwardRef(TanTableComponent) as TTanTable;
export { TanTable };
