<!--
SPDX-FileCopyrightText: 2022 Johannes Loher

SPDX-License-Identifier: MIT
-->

# Effect Hider

Hides token effects in FoundryVTT unless hovered.

## Without this module

![Before](./doc/img/before.webp)

## With this module

![After](./doc/img/after.gif)

# Installation

Copy and paste the following into Foundry's module installation URL field.

```bash
https://github.com/Furyspark/foundryvtt_effect-hider/releases/latest/download/module.json
```

## Development

### Prerequisites

In order to build this module, recent versions of `node` and `npm` are
required. Most likely, using `yarn` also works, but only `npm` is officially
supported. We recommend using the latest lts version of `node`. If you use `nvm`
to manage your `node` versions, you can simply run

```
nvm install
```

in the project's root directory.

You also need to install the project's dependencies. To do so, run

```
npm install
```

### Building

You can build the project by running

```
npm run build
```

Alternatively, you can run

```
npm run build:watch
```

to watch for changes and automatically build as necessary.

### Linking the built project to Foundry VTT

In order to provide a fluent development experience, it is recommended to link
the built module to your local Foundry VTT installation's data folder. In
order to do so, first add a file called `foundryconfig.json` to the project root
with the following content:

```
{
  "dataPath": ["/absolute/path/to/your/FoundryVTT"]
}
```

(if you are using Windows, make sure to use `\` as a path separator instead of
`/`)

Then run

```
npm run link-project
```

On Windows, creating symlinks requires administrator privileges, so
unfortunately you need to run the above command in an administrator terminal for
it to work.

You can also link to multiple data folders by specifying multiple paths in the
`dataPath` array.

## Licensing

This project is being developed under the terms of the
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT] for Foundry Virtual Tabletop.

[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT]: https://foundryvtt.com/article/license/
