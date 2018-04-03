module.exports = async (rule, context) => {
  const envinfo = require('envinfo')
  const { values, map, toPairs, contains, reject, isEmpty, filter, equals } = require('ramda')
  const notFound = 'Not Found'

  const envResults = toPairs(JSON.parse(envinfo.run(rule.report, { json: true })))

  const failures = map(envItem => {
    const [topLevel, results] = envItem

    if (contains(notFound, values(results))) {
      const failingItems = toPairs(filter(equals(notFound), results))
      const cleanFail = failingItems.map((item) => `${item[0]} ${item[1]}`)
      return `${topLevel} Fail - ${cleanFail.join(', ')}`
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
