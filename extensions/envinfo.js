const buildReport = require('./helpers/buildReport')
module.exports = (context) => {
  // Register this plugin
  context.addPlugin({
    name: 'envinfo',
    description: 'This solidarity plugin allows advanced reporting features using envinfo',
    rules: {
      infoReport: { report: buildReport },
      enforceReport: {
        report: buildReport
      }
    }
  })
}
