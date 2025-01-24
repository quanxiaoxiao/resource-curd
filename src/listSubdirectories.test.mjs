import assert from 'node:assert';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';

import listSubdirectories from './listSubdirectories.mjs';

test('listSubdirectories', async () => {
  const ret = await listSubdirectories(process.cwd());
  assert(ret.includes('src'));
});

test('listSubdirectories2', async () => {
  const ret = await listSubdirectories(path.resolve(process.cwd(), 'package.json'));
  assert.deepEqual(ret, []);
});
