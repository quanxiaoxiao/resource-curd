import assert from 'node:assert';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';

import readDirs from './readDirs.mjs';

test('readDirs', async () => {
  const ret = await readDirs(process.cwd());
  assert(ret.includes('src'));
});

test('readDirs2', async () => {
  const ret = await readDirs(path.resolve(process.cwd(), 'package.json'));
  assert.deepEqual(ret, []);
});
