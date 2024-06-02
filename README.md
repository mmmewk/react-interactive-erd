# React Interactive ERD

Library to render an entity relationship diagram for a generic database structure. Copied from Jack Swiggett's [rails_interactive_erd](https://github.com/jackswiggett/rails_interactive_erd/tree/main/react) library

## Installation

Install the package:

```bash
yarn add react-interactive-erd
```

Add D3 Graphviz to the head of your app:
TODO: Figure out if this is necessary

```html
<head>
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script
    src="https://unpkg.com/@hpcc-js/wasm@0.3.13/dist/index.min.js"
    type="javascript/worker"
  ></script>
  <script src="https://unpkg.com/d3-graphviz@3.1.0/build/d3-graphviz.js"></script>
</head>
```

Generate a schema for your database:

- For rails applications just use [rails_interactive_erd](https://github.com/jackswiggett/rails_interactive_erd/tree/main/react)
- For prisma applications use a generator (coming soon)
