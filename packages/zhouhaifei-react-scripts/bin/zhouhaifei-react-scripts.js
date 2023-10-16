#!/usr/bin/env node

function start() {
  return import('../dist/cjs/index.js');
}

start();
