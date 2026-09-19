# React props

Splitting the school dashboard into small components and passing data between
them with props: `Header`, `Footer` and `Login` extracted from `App`, a
reusable `NotificationItem`, a `CourseList` table, conditional rendering, and
prop validation with `prop-types` and shapes.

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

React is pinned to 16.x throughout, because Enzyme has no adapter for later
versions. Webpack 4 relies on the `md4` hash removed from the default OpenSSL
provider in Node 17. On Node 12 everything runs as-is; on a newer Node, prefix
the command:

```
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Tasks

| Task | Directory | Description |
| --- | --- | --- |
| 0 | [task_0](task_0) | `App` split into `Header`, `Footer`, `Login` and `Notifications` components |
| 1 | [task_1](task_1) | Shallow rendering tests for every component: 6 suites, 18 tests |
| 2 | [task_2](task_2) | `NotificationItem`, rendering either a text value or HTML |
| 3 | [task_3](task_3) | React Developer Tools: editing a prop live and profiling the app |
| 4 | [task_4](task_4) | `prop-types`, a `CourseList` table shown when logged in, and a notifications drawer toggled by `displayDrawer` |
| 5 | [task_5](task_5) | Courses and notifications rendered from lists with keys, validated by `CourseShape` and `NotificationItemShape` |

## Author

Kai Munyanana
