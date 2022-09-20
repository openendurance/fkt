![image](https://user-images.githubusercontent.com/1126366/191141582-fc642b21-879d-44db-b4c7-d0bac86d7280.png)

# FKT

[![Release](https://github.com/openendurance/fkt/actions/workflows/release.yml/badge.svg)](https://github.com/openendurance/fkt/actions/workflows/release.yml)
[![Build & Test](https://github.com/openendurance/fkt/actions/workflows/build.yml/badge.svg)](https://github.com/openendurance/fkt/actions/workflows/build.yml)
[![CodeQL](https://github.com/openendurance/fkt/actions/workflows/codeql.yml/badge.svg)](https://github.com/openendurance/fkt/actions/workflows/codeql-analysis.yml)

> A TypeScript toolkit for building endurance sports applications.

| Status | Owner              | Help                                                         |
| ------ | ------------------ | ------------------------------------------------------------ |
| Active | @openendurance/fkt | [New issue](https://github.com/openendurance/fkt/issues/new) |

## About this repo

The @openendurance/fkt repository is a monorepo made up of npm packages, CLI tools, documentation, and websites.

The project is structured like so:

```sh
fkt/
├── documentation            # Documentation for working in the monorepo
├── fkt-core                 # The core SDK
└── fkt.openendurance.org    # Documentation website
```

## Commands

### Install dependencies and build workspaces

```sh
yarn && yarn build
```

### Run a command

**One workspace**

Run commands from a selected workspace using [`turbo run <command> --filter=<workspace>...`](https://turborepo.org/docs/core-concepts/filtering) flag.

| Command                                             | Runs                                   |
| --------------------------------------------------- | -------------------------------------- |
| `yarn turbo run dev --filter=fkt.openendurance.org` | Open fkt.openendurance.org NextJS site |

**All workspaces**

Run commands across all workspaces. This uses [`turbo run <command>`](https://turborepo.org/docs/reference/command-line-reference#turbo-run-task).

| Command           | Runs                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `yarn changeset`  | Adds a new [changelog entry](https://github.com/opendurance/fkt/blob/main/.github/CONTRIBUTING.md#adding-a-changeset) |
| `yarn lint`       | Lints all workspaces                                                                                                  |
| `yarn test`       | Tests all workspaces                                                                                                  |
| `yarn type-check` | Build types and check for type errors                                                                                 |
| `yarn clean`      | Remove generated files                                                                                                |
| `yarn format`     | Format files with prettier                                                                                            |

## Contribute to this project

Pull requests are always welcome. See the [contribution guidelines](https://github.com/openendurance/fkt/blob/main/.github/CONTRIBUTING.md) for more information.

## License

Source code in this repository and related [NPM packages](https://www.npmjs.com/settings/openendurance/packages) are released under the [MIT license](https://github.com/openendurance/fkt/blob/main/LICENSE.md).

Photos used in the docs are property of their respective owners (probably @kcargile) and are subject to copyright unless otherwise specified.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fopenendurance%2Ffkt.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fopenendurance%2Ffkt?ref=badge_small)

---

<div align="center">
	Made with ❤️ in Leadville CO and through contributions from all over the 🌎
</div>
<br />
<div align="center">
	Copyright (c) 2022 <a href="https://algorythmic.com">Algorythmic, LLC</a>
</div>
<br />
<div align="center">

[![Solidarity](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

</div>
