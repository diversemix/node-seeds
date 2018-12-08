#!/usr/bin/env node
const SayPhrase = require('./say-phrase')
const ProcessArgv = require('./process-argv')

if (require.main == module) {

  const argv = ProcessArgv.get(process.argv, {
    verbose: false,
    default: 'hello world'
  })

  if (argv.verbose)
    console.info('Starting...')

  SayPhrase.say(argv.default)

  if (argv.verbose)
    console.info('...Done!')
}
