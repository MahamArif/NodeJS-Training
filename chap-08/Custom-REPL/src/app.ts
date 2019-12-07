#!/usr/bin/env node

const repl = require('repl'),
      flight = require('./flight');

const customPrompt = repl.start({prompt: 'flight> '});
customPrompt.context.flight = flight;