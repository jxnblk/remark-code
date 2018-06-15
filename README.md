
# remark-code

Extracts code fences from markdown using [Remark][remark]

```js
const unified = require('unified')
const remark = require('remark-parse')
const code = require('remark-code')

const src = `
# example

\`\`\`jsx
<Box>Code</Box>
\`\`\`
`

const result = unified()
  .use(remark)
  .use(compiler)
  .processSync(src)
```

[remark]: https://github.com/remarkjs/remark
