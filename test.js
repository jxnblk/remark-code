const test = require('ava')
const unified = require('unified')
const remark = require('remark-parse')
const code = require('./index')

const parse = src => {
  const result = unified()
    .use(remark)
    .use(code)
    .processSync(src)
  return result.contents
}

const fixture = `

# Hello

\`\`\`jsx
<Heading>Hello</Heading>
\`\`\`

\`\`\`html
<h1>Hi</h1>
\`\`\`

`

test('returns an array', t => {
  const codes = parse(fixture)
  t.true(Array.isArray(codes))
  t.is(codes.length, 2)
})

test('include lang attributes', t => {
  const [ a, b ] = parse(fixture)
  t.is(a.lang, 'jsx')
  t.is(b.lang, 'html')
})

