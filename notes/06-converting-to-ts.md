<p align='left'>
 <a href="05-what-have-I-done.md">◀ Back: ...What have I done?</a>
</p>

---

# Converting to TypeScript

In my [TS Fundamentals Course (v2)](https://drive.google.com/file/d/170oHzpLNeprUa-TMmOAnSU4caEFDSb3e/view) we discuss a procedure for progressively converting a codebase from JS to TS.

<p align='center'>

![](img/ts-3-essentials/slide-018.png)

</p>
<p align='center'>

![](img/ts-3-essentials/slide-019.png)

</p>
<p align='center'>

![](img/ts-3-essentials/slide-020.png)

</p>
<p align='center'>

![](img/ts-3-essentials/slide-021.png)

</p>

Putting aside that the last image above is a bit redundant (with `"strict"` enabling `"strictNullChecks"`, `"strictFunctionTypes"` and `""strictNullChecks"` already), there's a lot of work to unpack here

Realistically, this should be done in seperate steps for a large codebase

For example:

- 3.1) strict mode

```diff
--- a/tsconfig.json
+++ b/tsconfig.json
  "compilerOptions": {
+   "strict": true,
  }
```

- 3.2) more strict mode

```diff
--- a/tsconfig.json
+++ b/tsconfig.json
  "compilerOptions": {
+   "noUnusedLocals": true,
+   "noImplicitReturns": true,
+   "stripInternal": true,
+   "types": [],
+   "forceConsistentCasingInFileNames": true
  }
```

- 3.3) TS-specific linting

```diff
--- a/.eslintrc
+++ b/.eslintrc
+ "parser": "@typescript-eslint/parser",
  "extends": [
+   "prettier/@typescript-eslint",
+   "plugin:@typescript-eslint/recommended",
+   "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
```

- 3.4) Even more strict mode

```diff
--- a/.eslintrc
+++ b/.eslintrc
  "rules": {
+   "@typescript-eslint/no-unsafe-assignment": "off",
+   "@typescript-eslint/no-unsafe-return": "off",
+   "@typescript-eslint/no-explicit-any": "off"
  }
```

There are steps beyond this conversion that are important in order to mitigate some other risks. We'll get into those later

# CHALLENGE: Follow steps 1, 2 and 3 to convert the workshop chat app from JS to ts

---

<p align='right'>
 <a href="./03-app-vs-library-concerns.md">Next: App vs. Library Concerns ▶</a>
</p>
