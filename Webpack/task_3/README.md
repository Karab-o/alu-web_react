# Task 3 - Dev servers, modules, and tree shaking

The dashboard split into three independent modules.

* `modules/header`, `modules/body` and `modules/footer` are separate entry
  points, each bundled as `name_of_the_file.bundle.js`.
* A development server runs on port 8564 and opens the browser.
* Inline source maps map the console output back to the original files.
* `clean-webpack-plugin` empties the build folder on each build and
  `html-webpack-plugin` generates the `index.html`.
* `splitChunks` moves jQuery and Lodash into shared chunks instead of
  repeating them in every bundle.

## Usage

```
npm install
npm run build      # bundles into public/
npm run start-dev  # serves at http://localhost:8564
```
