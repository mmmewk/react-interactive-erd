import React from "react";
import styles from "../styles.module.scss";
import { Result } from "../types";

interface Props {
  /** Result to display */
  result: Result;
  /** Callback to set selected column, (Scroll it into view, then highlight) */
  setSelectedColumn?: (columnName: string) => void;
  /** Callback to select an entity */
  setEntityName: (entityName?: string) => void;
  /** Callback to update the query */
  setQuery?: (query: string) => void;
}

/** Search result with a link to the corresponding entity or column */
const SearchResult: React.FC<Props> = ({
  result: { entity, splitText, column },
  setEntityName,
  setSelectedColumn,
  setQuery,
}) => {
  return (
    <button
      type="button"
      className={styles.searchResult}
      onMouseDown={() => {
        setEntityName(entity.name);
        setSelectedColumn?.(column?.name || "");
        setQuery?.("");
      }}
    >
      <div>
        {splitText.map((text, index) =>
          index % 2 === 0 ? (
            <span key={index.toString()}>{text}</span>
          ) : (
            <strong key={index.toString()}>{text}</strong>
          )
        )}
      </div>
    </button>
  );
};

export default SearchResult;
