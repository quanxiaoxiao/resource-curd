import assert from 'node:assert';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import url from 'node:url';

import readFileMetadata from './readFileMetadata.mjs';

test('readFileMetadata', async () => {
  let ret = await readFileMetadata(path.resolve(process.cwd(), 'package.json'));
  assert.equal(ret.mime, 'application/json');
  ret = await readFileMetadata(path.resolve(process.cwd(), 'package11.json'));
  assert.equal(ret, null);
  const currentResourcePathname = url.fileURLToPath(import.meta.url);
  ret = await readFileMetadata(currentResourcePathname);
  assert.equal(ret.mime, 'text/javascript');
});
