# TypeScript

Introduction to TypeScript: interfaces, classes, functions, advanced types,
ambient namespaces, declaration merging and nominal typing, all compiled with
Webpack and `ts-loader`.

## Requirements

* Ubuntu 18.04 with Node 12
* Allowed editors: `vi`, `vim`, `emacs`, Visual Studio Code
* All files end with a new line
* The TypeScript compiler must report no error and no warning

## Setup

Each task is a self-contained project. From inside a task directory:

```
npm install
npm run build      # compiles with Webpack, type-checked by fork-ts-checker
npm run start-dev  # serves the page at http://localhost:8080
```

Webpack 4 relies on the `md4` hash, which was removed from the default OpenSSL
provider in Node 17. On Node 12 everything runs as-is; on a newer Node, prefix
the command:

```
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

## Tasks

| Task | Files | Description |
| --- | --- | --- |
| 0 | [task_0/js/main.ts](task_0/js/main.ts) | `Student` interface, `studentsList`, and a Vanilla JS `<table>` rendering the first name and location of each student |
| 1 | [task_1/js/main.ts](task_1/js/main.ts) | `Teacher` interface with `readonly` fields, an optional field and a string index signature |
| 2 | [task_1/js/main.ts](task_1/js/main.ts) | `Directors` interface extending `Teacher` with `numberOfReports` |
| 3 | [task_1/js/main.ts](task_1/js/main.ts) | `printTeacher` function and its `printTeacherFunction` interface |
| 4 | [task_1/js/main.ts](task_1/js/main.ts) | `StudentClass`, described by `StudentClassInterface` and `StudentConstructor` |
| 5 | [task_2/js/main.ts](task_2/js/main.ts) | `DirectorInterface`, `TeacherInterface`, the classes implementing them, and `createEmployee` |
| 6 | [task_2/js/main.ts](task_2/js/main.ts) | `isDirector` type predicate and `executeWork` |
| 7 | [task_2/js/main.ts](task_2/js/main.ts) | `Subjects` string literal type and `teachClass` |
| 8 | [task_3/js](task_3/js) | Ambient namespaces: `interface.ts`, the `crud.d.ts` declaration file for `crud.js`, and `main.ts` |
| 9 | [task_4/js/subjects](task_4/js/subjects) | The `Subjects` namespace with declaration merging on the `Teacher` interface |
| 10 | [task_4/js/main.ts](task_4/js/main.ts) | Using the `Cpp`, `Java` and `React` subjects with a shared teacher |
| 11 | [task_5/js/main.ts](task_5/js/main.ts) | Brand convention and nominal typing with `MajorCredits` and `MinorCredits` |

## Author

Kai Munyanana
