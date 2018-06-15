const toExamples = (node) => {
  if (node.type !== 'root') return
  const examples = []

  for (const child of node.children) {
    if (child.type !== 'code') continue
    examples.push({
      lang: child.lang,
      code: child.value
    })
  }

  return examples
}

function compiler () {
  this.Compiler = compiler
  function compiler (tree) {
    return toExamples(tree)
  }
}

module.exports = compiler

/*
  Example Usage

  const unified = require('unified')
  const remark = require('remark-parse')
  const parse = src => {
    const result = unified()
      .use(remark)
      .use(compiler)
      .processSync(src)
    return result.contents
  }
*/

