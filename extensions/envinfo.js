const buildReport = require('./helpers/buildReport')
const checkReport = require('./helpers/checkEnv')
module.exports = (context) => {
  // Register this plugin
  context.addPlugin({
    name: 'envinfo',
    description: 'This solidarity plugin allows advanced reporting features using envinfo',
    rules: {
      infoReport: { report: buildReport },
      enforceReport: {
        check: checkReport,
        report: buildReport
      }
    }
  })
}
