# React Redux reducer and selector

The reducers behind the school dashboard: a plain UI reducer first, then the
same one on an Immutable `Map`, reducers for courses and notifications, a
normalized state shape built with Normalizr, and selectors to read it back.

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

## Notes

Reducers never mutate the state they are handed: the plain ones copy with the
spread operator, and the Immutable ones return the new `Map` that `set`,
`setIn` and `merge` produce. `uiReducer` keeps `fromJS` and `toJS` out of the
reducer itself, so no conversion happens on every action.

From task 4 the collections are normalized, which is what makes selecting a
course or marking a notification as read a single `setIn` call against the
item's id.

## Tasks

| Task | Directory | Description |
| --- | --- | --- |
| 0 | [task_0](task_0) | `uiReducer` over a plain object, updated with the spread operator |
| 1 | [task_1](task_1) | The same reducer on an Immutable `Map`, using `set` |
| 2 | [task_2](task_2) | `courseReducer` with `FETCH_COURSE_SUCCESS`, `SELECT_COURSE` and `UNSELECT_COURSE` |
| 3 | [task_3](task_3) | `notificationReducer` with its notifications list and selected filter |
| 4 | [task_4](task_4) | `coursesNormalizer` and `notificationsNormalizer`, with both reducers on Immutable state |
| 5 | [task_5](task_5) | `filterTypeSelected`, `getNotifications` and `getUnreadNotifications` |

## Author

Kai Munyanana
