#!/usr/bin/env node
const yargs = require('yargs')
const colors = require('colors/safe')
const SayPhrase = require('./say-phrase')

yargs
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .command('say [phrase]', 'print the phrase', (yargs) => {
    yargs
      .positional('phrase', {
        describe: 'phrase to say',
        default: 'hello-world'
      })
  }, (argv) => {
    if (argv.verbose)
      console.info(colors.yellow('Starting...'))

    const sp = new SayPhrase()
    sp.say(argv.phrase)

    if (argv.verbose)
      console.info(colors.yellow('...Done!'))
  })
  .argv