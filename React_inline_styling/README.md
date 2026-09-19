# React inline styling

Moving the school dashboard's styling out of CSS files and into the
components: inline `style` objects first, then Aphrodite for scoped,
conditional styles, media queries for small screens, and keyframe animations.

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

Tests that render Aphrodite components call
`StyleSheetTestUtils.suppressStyleInjection()` before the suite runs, so no
style tags are injected into the test DOM.

## Tasks

| Task | Directory | Description |
| --- | --- | --- |
| 0 | [task_0](task_0) | Inline `style` constants on `CourseListRow` for header and default rows |
| 1 | [task_1](task_1) | Aphrodite in `App`, `Header`, `Login`, `CourseList`, `Notifications` and `BodySectionWithMarginBottom`, replacing their CSS files |
| 2 | [task_2](task_2) | Conditional Aphrodite styles for urgent and default notifications and for each kind of table row and cell; no CSS files remain |
| 3 | [task_3](task_3) | Media queries under 900px: a stacked login form and a full-screen notifications panel |
| 4 | [task_4](task_4) | A floating notifications menu item that fades and bounces on hover and hides while the panel is open |

## Author

Kai Munyanana
