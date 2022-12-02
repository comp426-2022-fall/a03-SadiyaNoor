#!/usr/bin/env node




const args = minimist(process.argv.slice(2));

console.log(JSON.stringify(roll(args.sides || 6, args.dice || 2, args.rolls || 1)));