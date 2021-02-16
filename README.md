# fresh-breath

>

[![NPM](https://img.shields.io/npm/v/fresh-breath.svg)](https://www.npmjs.com/package/fresh-breath) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# Install fresh-breath for React project
npm install --save fresh-breath
```

## Quickstart

```jsx
import React from 'react'

import { Button } from 'fresh-breath'

const Example = () => {
  return <Button>Click me!</Button>
}
```

#### Components

Component | Props | Desciption | Type | Default
--- | --- | --- | --- | --- |
`Anchor` | color<br />hover<br />underline<br />Extra<br /><br /><br />size | can be set to any supported CSS value e.g. #fff<br />adds animation on mouse hover<br />adds a line under anchor on hover<br />object with `Content` and `position` keys which<br />adds an icon near the anchor, first is icon path<br />and second can be to either `left` or `right`<br />can be set to `large`/`medium`/`small` | string<br />boolean<br />boolean<br />object<br /><br /><br />string | -<br />false<br />false<br />-<br /><br /><br />medium

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
