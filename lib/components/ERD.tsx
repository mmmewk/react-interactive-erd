import React from "react";
import styles from "../styles.module.scss";
import { Schema } from "../types";
import EntityDetails from "./EntityDetails";
import GraphvizDiagram from "./GraphvizDiagram";
import SearchBar from "./SearchBar";

interface Props {
  /** Information about the database schema */
  schema: Schema;
  /** Currently selected entity */
  selectedEntity?: string;
  /** Callback to update the selected entity */
  setSelectedEntity: (entity?: string) => void;
}

/** Interactive entity relationship diagram to visualize and explore the database schema */
const ERD: React.FC<Props> = ({
  schema,
  selectedEntity,
  setSelectedEntity,
}) => {
  const entity = schema.entities.find(({ name }) => name === selectedEntity);

  return (
    <div className={styles.root}>
      <SearchBar
        entities={schema.entities}
        setEntityName={setSelectedEntity}
        logoImagePath={schema.logoImagePath}
      />
      <div className={styles.content}>
        <GraphvizDiagram
          schema={schema}
          entityName={selectedEntity}
          setEntityName={setSelectedEntity}
        />
        {entity && (
          <div className={styles.rightPanel}>
            <EntityDetails entity={entity} setEntityName={setSelectedEntity} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ERD;
