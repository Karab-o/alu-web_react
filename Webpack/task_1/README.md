# Task 1 - Using a config file

Webpack driven by `webpack.config.js` instead of its defaults.

* Entry point `js/dashboard_main.js`, output `public/bundle.js`, mode `production`.
* jQuery adds the dashboard text, a button and a `#count` paragraph.
* `updateCounter()` tracks clicks, bound to the button through Lodash `debounce`.

## Usage

```
npm install
npm run build
```

Open `public/index.html` in a browser.
