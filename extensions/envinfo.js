const addOptionalRules = require('./helpers/addOptionalRules')
const getAndroidEnvData = require('./helpers/getAndroidEnvData')

module.exports = (context) => {
  // Register this plugin
  context.addPlugin({
    name: 'envinfo',
    description: 'This solidarity plugin allows advanced reporting features using envinfo',
    rules: {
      infoReport: {
        report: async (rule, context, report) => {
          const { print } = context
          const { colors } = print

          // const projectAPIMessage = availableApiVersions.includes(projectApiVersion)
          //   ? colors.green(`API ${projectApiVersion} Available`)
          //   : colors.red(`API ${projectApiVersion} Unavailable`)

          // const projectBuildToolsMessage = availableBuildToolsVersions.includes(projectBuildToolsVersion)
          //   ? colors.green(`Build Tools ${projectBuildToolsVersion} Available`)
          //   : colors.red(`Build Tools ${projectBuildToolsVersion} Unavailable`)

          report.customRules.push({
            title: 'Requested Environment Info',
            table: [
              ['Key', 'Value'],
              [projectAPIMessage, projectBuildToolsMessage],
            ]
          })
        }
      }
    }
  })
}
