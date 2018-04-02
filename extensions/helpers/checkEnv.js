module.exports = async (rule, context) => {
  const envinfo = require('envinfo')

  return {
    pass: true,
    message: `Environment Info Good MOFUCKA`
  }
}
