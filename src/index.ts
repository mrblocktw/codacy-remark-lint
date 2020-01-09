#!/usr/bin/env node

import run from './lib/remark-runner';

run().then(
  results => {
    results.forEach(result => {
      process.stdout.write(`${JSON.stringify(result)}\n`);
    });

    process.exit(0);
  },
  reason => {
    process.stderr.write(`${JSON.stringify(reason)}\n`);
    process.exit(1);
  }
);
