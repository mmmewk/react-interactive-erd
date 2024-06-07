import React, { useEffect, useMemo } from "react";
import { CellProps, useTable } from "react-table";
import styles from "../styles.module.scss";
import { Column, Entity } from "../types";
import NameCell from "./NameCell";
import TypeCell from "./TypeCell";

interface Props {
  /** Currently selected entity */
  entity: Entity;
  /** Currently selected column (to scroll into view and highlight) */
  selectedColumn?: string;
  /** Callback to set the selected column */
  setSelectedColumn?: (columnName: string) => void;
  /** Callback to select an entity */
  setEntityName: (entityName?: string) => void;
}

/** Displays information about the currently selected entity */
const EntityDetails: React.FC<Props> = ({
  entity,
  setEntityName,
  selectedColumn,
  setSelectedColumn,
}) => {
  const columns = useMemo(() => {
    return [
      {
        accessor: "name",
        Header: "Name",
        Cell: ({ row: { original } }: CellProps<Column>) => (
          <NameCell column={original} setEntityName={setEntityName} />
        ),
      } as const,
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ row: { original } }: CellProps<Column>) => (
          <TypeCell column={original} />
        ),
      } as const,
      { Header: "Comment", accessor: "comment" } as const,
    ];
  }, [setEntityName]);

  const tableInstance = useTable({ columns, data: entity.columns });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    if (!selectedColumn) return;

    const id = `row-${selectedColumn}`;
    const element = document.getElementById(id);
    if (!element) return;

    setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
    element.classList.add(styles.highlight);
    setTimeout(() => {
      element.classList.remove(styles.highlight);
      setSelectedColumn?.("");
    }, 1000);
  }, [selectedColumn, setSelectedColumn]);

  return (
    <div className={styles.entityDetails}>
      <h2>{entity.friendlyName}</h2>
      {entity.comment ? <p>{entity.comment}</p> : null}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.getHeaderGroupProps().key}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.getHeaderProps().key}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                id={`row-${row.original.name}`}
                {...row.getRowProps()}
                key={row.getRowProps().key}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.getCellProps().key}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EntityDetails;
