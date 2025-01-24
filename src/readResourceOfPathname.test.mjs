import assert from 'node:assert';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import url from 'node:url';

import readResourceOfPathname from './readResourceOfPathname.mjs';

test('readResourceOfPathname', async () => {
  let ret = await readResourceOfPathname(path.resolve(process.cwd(), 'package.json'));
  assert.equal(ret.mime, 'application/json');
  ret = await readResourceOfPathname(path.resolve(process.cwd(), 'package11.json'));
  assert.equal(ret, null);
  const currentResourcePathname = url.fileURLToPath(import.meta.url);
  ret = await readResourceOfPathname(currentResourcePathname);
  assert.equal(ret.mime, 'application/javascript');
});
