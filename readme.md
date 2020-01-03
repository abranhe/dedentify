# dedentify [![Github](https://github.com/abranhe/dedentify/workflows/build/badge.svg)](https://github.com/abranhe/dedentify) [![Travis](https://travis-ci.com/abranhe/dedentify.svg?branch=master)](https://travis-ci.com/abranhe/dedentify) [![License](https://img.shields.io/github/license/abranhe/dedentify.svg)](https://github.com/abranhe/dedentify/blob/master/license) [![npm](https://img.shields.io/npm/v/dedentify.svg?logo=npm)](https://npmjs.org/dedentify)

> Remove indentation inside strings.

## Install

```
$ npm install dedentify
```

<details>
<summary>
  Other options?
</summary>

###### npm

```
$ npm install dedentify
```

###### yarn

```
$ yarn add dedentify
```

###### Github Registry

```
$ npm install abranhe@dedentify
```

</details>

## Usage

```js
const dedentify = require('dedentify');

dedentify`
  This
is
  Awesome
`;

// => `
// This
// is
// Awesome
// `
```

## API

### dedentify(input)

#### input

Type: `string` | `TemplateStringsArray`

The template string to deindent.


## License

MIT © [Abraham Hernandez](https://abranhe.com)