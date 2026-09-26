# React state

Adding logic and state to the school dashboard: local component state for
the notifications drawer, a controlled login form, a React Context shared by
the header and footer, lifting the notifications list into the `App` state,
and a first React Hook.

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

On a Node version newer than 17, Webpack 4 needs the legacy OpenSSL provider:

```
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Tasks

| Task | Topic |
| --- | --- |
| `task_0` | `displayDrawer` local state in `App`, show / hide handlers passed to `Notifications` |
| `task_1` | Controlled `Login` form with `email`, `password` and `enableSubmit` state |
| `task_2` | `AppContext` with `user` and `logOut`, `logIn` / `logOut` in `App`, logout section in `Header` |
| `task_3` | `Footer` as a context consumer, `listNotifications` and `markNotificationAsRead` in `App`, `Notifications` as a `PureComponent` |
| `task_4` | `useState` checkbox in `CourseListRow` with the `rowChecked` style |
