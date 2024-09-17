import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Row,
  RowData,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import React, {
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

import _ from "lodash";
import { DefaultColumn } from "./Column";
import { Filter, FilterDate, FilterGender } from "./Filter";
import "./style.css";
import { dateFilter } from "./utils";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    removeData: (rowIndex: number) => void;
    getRowStyles: (row: Row<TData>) => CSSProperties;
  }
  type TColumnMeta = "gender" | "rank" | "date";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    custom: {
      [k in TColumnMeta]?: boolean;
    };
  }
  interface FilterFns {
    dateFilter: typeof dateFilter;
  }
}

interface ITable<T> {
  showAction?: boolean;
  selectableRows?: boolean;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: T[];
  }) => void;
  columns: ColumnDef<T>[];
  data?: T[];
  selectableRowSelected?: (row: T) => boolean; // pre selected rows condition
  enableRowSelection?: (row: Row<T>) => boolean;
  getRowId?: (r: T) => string;
  resizeableColumns?: boolean;
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
    cell: (props) => <DefaultColumn {...props} />,
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
  isChanged: boolean;
  reset: () => void;
}

const TanTableComponent = <T,>(
  {
    data: srcData = [],
    // onRowSelect,
    onSelectedRowsChange,
    getRowId,
    columns,
    selectableRowSelected,
    enableRowSelection,
    resizeableColumns,
  }: ITable<T>,
  ref: Ref<ITanTableRef<T>>
) => {
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();
  const [data, setData] = useState(srcData);
  // const [globalFilter, setGlobalFilter] = React.useState("");
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
    selectableRowSelected && getRowId
      ? srcData.reduce(
          (p, c) => ({
            ...p,
            [getRowId?.(c)]: selectableRowSelected(c),
          }),
          {}
        )
      : {}
  );

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setEditing(false);
  }, [data]);

  useEffect(() => {
    setRowSelection(
      selectableRowSelected && getRowId
        ? data.reduce(
            (p, c) => ({
              ...p,
              [getRowId?.(c)]: selectableRowSelected(c),
            }),
            {}
          )
        : {}
    );
  }, [data]);

  useImperativeHandle(
    ref,
    () => ({
      getData: () => data,
      isChanged: editing,
      reset: () => setData(srcData),
    }),
    [data, editing, srcData]
  );

  const tableColumns = useMemo<ColumnDef<T>[]>(() => {
    let cols = [...columns];
    if (onSelectedRowsChange) {
      cols = [getSelectableColumn(), ...cols];
    }
    return cols;
  }, [columns, onSelectedRowsChange]);

  useEffect(() => {
    setData(srcData);
  }, [srcData]);

  useEffect(() => {
    if (!getRowId) return;
    const selectedRowIds = Object.keys(rowSelection).filter(
      (id) => rowSelection[id]
    );

    const selectedRows = data.filter((row) =>
      selectedRowIds.includes(getRowId(row))
    );

    onSelectedRowsChange?.({
      allSelected: selectedRows.length === data.length,
      selectedCount: selectedRows.length,
      selectedRows: selectedRows as T[],
    });
  }, [data, getRowId, onSelectedRowsChange, rowSelection]);

  const table = useReactTable({
    data,
    columns: tableColumns,
    defaultColumn: getDefaultColumn<T>(),
    // columnResizeMode: resizeableColumns ? "onChange" : undefined,
    // columnResizeDirection: resizeableColumns ? "ltr" : undefined,
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    getRowId: getRowId,
    state: {
      rowSelection,
    },
    enableRowSelection: enableRowSelection ? enableRowSelection : true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    // onStateChange
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    filterFns: {
      dateFilter,
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex();
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              const newRow = {
                ...old[rowIndex]!,
              };
              _.set(newRow, columnId, value);

              return newRow;
            }
            return row;
          })
        );
        setEditing(true);
      },
      removeData: (rowIndex) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex();
        setData((old) =>
          old.filter((_, index) => {
            if (index !== rowIndex) {
              return true;
            }
            return false;
          })
        );
        setEditing(true);
      },
      getRowStyles: (row) => ({
        background: (() => {
          let same = false;
          const tableRow = row.original;
          const srcRecord = srcData.find(
            (d) => getRowId?.(d) === getRowId?.(tableRow)
          );
          if (!srcRecord) same = false;
          else same = _.isEqual(tableRow, srcRecord);
          return same ? "#fafafa" : "#fff";
        })(),
        color: (() => {
          if (
            onSelectedRowsChange &&
            selectableRowSelected &&
            typeof enableRowSelection === "function"
          ) {
            if (!enableRowSelection(row)) {
              return "gray";
            }
            return "black";
          }
        })(),
      }),
    },
  });

  const rerender = React.useReducer(() => ({}), {})[1];
  const refreshData = () => setData([...srcData]);

  return (
    <div className="table-responsive">
      {/* <div>
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 font-lg shadow border border-block f-w-300"
          placeholder="Tìm kiếm"
        />
      </div> */}
      <div className="overflow-x-auto" style={{ overflowX: "auto" }}>
        <table
          className="table items-center"
          {...{
            style: {
              width: resizeableColumns
                ? table.getCenterTotalSize()
                : "inherited",
            },
          }}
        >
          <thead className="text-center">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, i) => {
                  let className = "align-middle border border-slate-300 ";
                  if (i == 0 && onSelectedRowsChange) {
                    className += " w-8";
                  }
                  return (
                    <th
                      className={className}
                      {...{
                        key: header.id,
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            table.options.columnResizeDirection
                          } ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`,
                        }}
                      ></div>
                      <div>
                        {(() => {
                          if (!header.column.getCanFilter()) return null;
                          if (header.column.columnDef.meta?.custom.gender) {
                            return (
                              <FilterGender
                                column={header.column}
                                table={table}
                              />
                            );
                          }

                          if (header.column.columnDef.meta?.custom.date) {
                            return (
                              <FilterDate
                                column={header.column}
                                table={table}
                              />
                            );
                          }
                          return (
                            <Filter column={header.column} table={table} />
                          );
                        })()}
                      </div>
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
                      <td
                        key={cell.id}
                        className="border border-slate-300"
                        style={table.options.meta?.getRowStyles(row)}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="h-2" />
      <div className="flex items-center gap-2 justify-center">
        <button
          type="button"
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          type="button"
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          type="button"
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          type="button"
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Trang</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} của{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Đi đến trang:
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
          {[5, 10, 20, 30, 40, 50, 500].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Hiển thị {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* <div>{table.getRowModel().rows.length} Rows</div> */}
      {/* <div> */}
      {/*   <button type="button"  onClick={() => rerender()}>Force Rerender</button> */}
      {/* </div> */}
      {/* <div> */}
      {/*   <button type="button"  onClick={() => refreshData()}>Refresh Data</button> */}
      {/* </div> */}
    </div>
  );
};

type TTanTable = <T>(
  p: ITable<T> & { ref?: Ref<ITanTableRef<T>> }
) => ReactElement;

const TanTable = forwardRef(TanTableComponent) as TTanTable;
export { TanTable };
