<p align='left'>
 <a href="01-project-tour.md">◀ Back: Project Tour</a>
</p>

---

# Mike's "bare bones" TS setup

In this part of the workshop, we'll create a new small library from nothing, so you can see how Mike's "lots of value out of few tools" approach keeps things nice and simple.

First, create a new directory and enter it

```sh
mkdir my-lib
cd my-lib
```

Then, create a gitignore file

```sh
npx gitignore node
```

and a package.json file

```sh
yarn init --yes
```

Pin the node and yarn versions to their current stable releases using volta

```sh
volta pin node
volta pin yarn
```

initialize the git repo

```sh
git init
```

install typescript and eslint as devdeps

```sh
yarn add -D typescript eslint
```

create your default `tsconfig.json`

```sh
yarn tsc init
```

and your ESLint config

```sh
yarn eslint --init
```

making the following choices:

<ul>
    <dt>How would you like to use ESLint?</dt>
    <dd>To check syntax and find problems</dd>
    <dt>What type of modules does your project use</dt>
    <dd>None of these</dd>
    <dt>Which framework does your project use?</dt>
    <dd>None of these</dd>
    <dt>Does your project use TypeScript?</dt>
    <dd>Yes</dd>
    <dt>Where does your code run?</dt>
    <dd>Node</dd>
    <dt>What format do you want your config file to be in?</dt>
    <dd>JSON</dd>
</ul>
