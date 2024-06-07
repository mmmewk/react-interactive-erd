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
        name: "Profile",
        friendlyName: "Profile",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the profile",
            hideEdge: false,
          },
          {
            name: "bio",
            type: "string",
            associations: [],
            comment: "Biography of the user",
            hideEdge: false,
          },
          {
            name: "user_id",
            type: "string",
            associations: ["User"],
            comment: "Id of the user who owns the profile",
            hideEdge: false,
          },
        ],
      },
      {
        name: "Book",
        friendlyName: "Book",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the book",
            hideEdge: false,
          },
          {
            name: "full_text",
            type: "string",
            associations: [],
            comment: "full text of the book",
            hideEdge: false,
          },
          {
            name: "author_id",
            type: "string",
            associations: ["User"],
            comment: "Id of the user who created the book",
            hideEdge: false,
          },
        ],
      },
      {
        name: "Chapter",
        friendlyName: "Chapter",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the chapter",
            hideEdge: false,
          },
          {
            name: "title",
            type: "string",
            associations: [],
            comment: "Title of the chapter",
            hideEdge: false,
          },
          {
            name: "content",
            type: "string",
            associations: [],
            comment: "Content of the chapter",
            hideEdge: false,
          },
          {
            name: "really_long_column_name_really_long_column_name",
            type: "string",
            associations: [],
            comment:
              "We need space for the comment because its also pretty big!",
            hideEdge: false,
          },
          {
            name: "book_id",
            type: "string",
            associations: ["Book"],
            comment: "Id of the book that the chapter belongs to",
            hideEdge: false,
          },
        ],
      },
      {
        name: "Review",
        friendlyName: "Review",
        columns: [
          {
            name: "id",
            type: "string",
            associations: [],
            comment: "Id of the review",
            hideEdge: false,
          },
          {
            name: "body",
            type: "string",
            associations: [],
            comment: "Body of the review",
            hideEdge: false,
          },
          {
            name: "created_by_id",
            type: "string",
            associations: ["User"],
            comment: "Id of the user who created the review",
            hideEdge: false,
          },
          {
            name: "rating",
            type: "float",
            associations: [],
            comment: "Rating of the review",
            hideEdge: false,
          },
          {
            name: "book_id",
            type: "string",
            associations: ["Book"],
            comment: "Id of the book that the review belongs to",
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
