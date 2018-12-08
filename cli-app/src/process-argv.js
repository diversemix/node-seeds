
class ProcessArgv {
  static get(args, defaults) {
    let argv = Object.assign({}, defaults)
    args.forEach((element, index) => {
      if (index >= 2) {
        switch (element) {
        case '-v':
          argv.verbose = true
          break
        default:
          argv.default = element
          break
        }
      }
    })
    return argv
  }
}

module.exports = ProcessArgv