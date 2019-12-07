const proclaim = require('./proclaim');
const os = require('os');

proclaim.whisper('Hi');
console.log(`This code is running on ${os.type()}`);