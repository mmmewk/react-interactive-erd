import { useState } from "react";
import { ERD } from "../lib/main";
import { Schema } from "../lib/types";
import "./App.css";

function App() {
  const [entity, setEntity] = useState<string>();

  const schema: Schema = {
    entities: [
      {
        name: "User",
        friendlyName: "User",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the user",
            hideEdge: false,
          },
          {
            name: "account_type",
            type: "account_type",
            associations: [],
            comment: "Type of the user's account",
            hideEdge: false,
            enumValues: { Author: "Author", Admin: "Admin", Reader: "Reader" },
          },
        ],
      },
      {
        name: "Post",
        friendlyName: "Post",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the post",
            hideEdge: false,
          },
          {
            name: "authorId",
            type: "string",
            associations: ["User"],
            comment: "Id of the user who created the post",
            hideEdge: false,
          },
        ],
      },
      {
        name: "Comment",
        friendlyName: "Comment",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the comment",
            hideEdge: false,
          },
          {
            name: "postId",
            type: "string",
            associations: ["Post"],
            comment: "Id of the post that the comment belongs to",
            hideEdge: false,
          },
        ],
      },
    ],
  };

  return (
    <ERD
      schema={schema}
      selectedEntity={entity}
      setSelectedEntity={setEntity}
    />
  );
}

export default App;
