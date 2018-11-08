module.exports = async (rule, context, report) => {
  const envinfo = require('envinfo')
  const { toPairs, map } = require('ramda')

  const envResults = toPairs(JSON.parse(await envinfo.run(rule.report, { json: true, showNotFound: true })))

  const envTables = map(envItem => {
    const [topLevel, results] = envItem
    const allResults = toPairs(results)
    if (topLevel === 'npmPackages') {
      const subResults = toPairs(allResults)
      const tableizedNpm = map(fun => {
        const eachPackage = fun[1]
        return [eachPackage[0], eachPackage[1]['wanted'], eachPackage[1]['installed']]
      }, subResults)
      return {
        title: 'Reported NPM Packages',
        table: [
          ['Package', 'Wanted', 'Installed'],
          ...tableizedNpm
        ]
      }
    } else {
      return {
        title: topLevel,
        table: [
          ['key', 'value'],
          ...allResults
        ]
      }
    }
  }, envResults)

  report.customRules = [...envTables, ...report.customRules]
}
