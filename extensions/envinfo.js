module.exports = (context) => {
  // Register this plugin
  context.addPlugin({
    name: 'envinfo',
    description: 'This solidarity plugin allows advanced reporting features using envinfo',
    rules: {
      infoReport: {
        report: async (rule, context, report) => {
          const envinfo = require('envinfo')
          const { toPairs, map } = require('ramda')

          const envResults = toPairs(JSON.parse(envinfo.run(rule.report, { json: true })))

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
      }
    }
  })
}
