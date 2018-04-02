module.exports = async (rule, context) => {
  const envinfo = require('envinfo')
  const { values, map, toPairs, contains, reject, isEmpty } = require('ramda')

  const envResults = toPairs(JSON.parse(envinfo.run(rule.report, { json: true })))

  const failures = map(envItem => {
    const [topLevel, results] = envItem

    if (contains('Not Found', values(results))) {
      return `Env Fail for ${topLevel} -> ${toPairs(results)}`
    } else {
      return ''
    }
  }, envResults)

  const errors = reject(isEmpty, failures)

  if (errors.length > 0) {
    return {
      pass: false,
      message: errors.join(', ')
    }
  } else {
    return {
      pass: true,
      message: `Enforced envinfo all good`
    }
  }
}
