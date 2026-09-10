# React intro

An introduction to React: building a school dashboard with `create-react-app`,
JSX, embedded expressions, Enzyme shallow rendering tests, a GitHub Pages
deployment, and finally the same app rebuilt by hand with Webpack and Babel.

## Requirements

* Ubuntu 18.04 LTS with `node 12.x.x` and `npm 6.x.x`
* Allowed editors: `vi`, `vim`, `emacs`, Visual Studio Code
* All files end with a new line

## Setup

Each task holds its own `dashboard` project. From inside a `dashboard` folder:

```
npm install
npm start   # development server
npm test    # test suite
```

React is pinned to 16.x throughout, because Enzyme (required for the shallow
rendering tests) has no adapter for later versions.

`react-scripts` 3.4.4 builds with Webpack 4, which relies on the `md4` hash
removed from the default OpenSSL provider in Node 17. On Node 12 everything
runs as-is; on a newer Node, prefix the command:

```
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Tasks

| Task | Directory | Description |
| --- | --- | --- |
| 0 | [task_0](task_0) | Basic application: header, body and footer divs, with the unused CRA files removed |
| 1 | [task_1](task_1) | Embedded expressions: `getFullYear` and `getFooterCopy` utils, plus the `Notifications` component |
| 2 | [task_2](task_2) | A login form in the App, and a notifications list with priorities, a close button and `dangerouslySetInnerHTML` |
| 3 | [task_3](task_3) | Jest and Enzyme: 11 tests across `utils`, `App` and `Notifications`, all using shallow rendering |
| 4 | [task_4](task_4) | The same dashboard, deployed to GitHub Pages with `gh-pages` |
| 5 | [task_5](task_5) | The dashboard rebuilt from scratch on Webpack and Babel, with the source reorganised into `App`, `Notifications`, `utils` and `assets` folders |

## Author

Kai Munyanana
