#!/usr/bin/env node
'use strict'
var yargs = require('yargs')
var colors = require('colors/safe')

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
    console.log(argv.phrase)
    if (argv.verbose)
      console.info(colors.yellow('...Done!'))
  })
  .argv