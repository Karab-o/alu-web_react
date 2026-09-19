# React component

Class components, lifecycles and performance: the school dashboard from
React props, refactored with a class-based `App` and `Notifications`, keyboard
and click event handling, reusable section components, a logging higher-order
component, and render optimisation with `React.memo` and
`shouldComponentUpdate`.

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
| 0 | [task_0](task_0) | `App` converted from a function to a class component |
| 1 | [task_1](task_1) | A `logOut` prop and a keydown listener: `Ctrl`+`H` alerts `Logging you out` and logs out; the listener is removed on unmount |
| 2 | [task_2](task_2) | `Notifications` as a class with a bound `markAsRead(id)`, passed to each `NotificationItem` and called on click |
| 3 | [task_3](task_3) | `BodySection` and `BodySectionWithMarginBottom` for containment and specialisation, used to wrap the login form, the course list and a news block |
| 4 | [task_4](task_4) | `WithLogging`, a higher-order component that logs mount and unmount and sets `displayName` to `WithLogging(Name)` |
| 5 | [task_5](task_5) | `NotificationItem` made pure with `React.memo`; `Notifications` only re-renders when it receives a longer list |

## Author

Kai Munyanana
