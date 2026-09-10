# Webpack

Introduction to Webpack: bundling JavaScript, loading CSS and images, running a
development server, splitting code into modules and shipping smaller bundles.

## Requirements

* Ubuntu 18.04 with Node 12
* Allowed editors: `vi`, `vim`, `emacs`, Visual Studio Code
* All files end with a new line

## Setup

Each task is a self-contained project. From inside a task directory:

```
npm install
npm run build      # bundles the project with Webpack
npm run start-dev  # task_3 only: serves the page at http://localhost:8564
```

Webpack 4 relies on the `md4` hash, which was removed from the default OpenSSL
provider in Node 17. On Node 12 everything runs as-is; on a newer Node, prefix
the command:

```
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

## Tasks

| Task | Directory | Description |
| --- | --- | --- |
| 0 | [task_0](task_0) | Basic setup: no config file, jQuery appends three paragraphs, bundle emitted to `dist/main.js` |
| 1 | [task_1](task_1) | Webpack config file, production mode, `public/bundle.js`, a click counter debounced with Lodash |
| 2 | [task_2](task_2) | CSS and images added to the bundle, logo styled from `assets/holberton-logo.jpg`, images optimized |
| 3 | [task_3](task_3) | Dev server on port 8564, three entry points (`header`, `body`, `footer`), inline source maps, build folder cleaned on each build, and vendor code split into shared chunks |

## Author

Kai Munyanana
