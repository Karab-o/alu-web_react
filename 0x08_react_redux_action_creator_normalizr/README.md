# React Redux action creator and Normalizr

Preparing the school dashboard for Redux: flattening the notifications API
response with Normalizr, then writing the action types, action creators, bound
creators and async (thunk) creators the reducers will use in the next project.

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

## The data

`notifications.json` sits at the root of each dashboard and is imported
directly by `src/schema/notifications.js`. From task 7 it is also served from
`dist/`, together with `login-success.json`, so the app has an API to call.

## Tasks

| Task | Directory | Description |
| --- | --- | --- |
| 0 | [task_0](task_0) | `getAllNotificationsByUser`, reading the raw JSON |
| 1 | [task_1](task_1) | `users`, `messages` and `notifications` entities, normalized with Normalizr |
| 2 | [task_2](task_2) | The same filter rewritten over the normalized data, in a single loop |
| 3 | [task_3](task_3) | `SELECT_COURSE` and `UNSELECT_COURSE`, with their creators and tests |
| 4 | [task_4](task_4) | Login, logout and notification drawer actions |
| 5 | [task_5](task_5) | `MARK_AS_READ`, `SET_TYPE_FILTER` and the `NotificationTypeFilters` states |
| 6 | [task_6](task_6) | Every creator bound to a dispatch with `bindActionCreators` |
| 7 | [task_7](task_7) | `loginRequest`, an async creator dispatching `LOGIN_SUCCESS` or `LOGIN_FAILURE` |

## Author

Kai Munyanana
