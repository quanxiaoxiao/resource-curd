import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import url from 'node:url';

import listResources from './listResources.mjs';

test('listResources', async () => {
  const dir = path.resolve(process.cwd(), 'src');
  const list = await listResources(dir);
  assert(list.length > 0);
  const currentResourcePathname = url.fileURLToPath(import.meta.url);
  assert(!!list.find((d) => path.join(dir, d.pathname) === currentResourcePathname));
});;

test('listResources2', async () => {
  const dir = path.resolve(process.cwd(), 'node_modules');
  const list = await listResources(dir);
  assert(list.length > 0);
  const fileList = fs.readdirSync(dir);
  assert(list.length > fileList.length);
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    assert(item.pathname.indexOf(dir) !== 0);
    assert(item.pathname.indexOf('/') === 0);
    assert(fileList.includes(item.pathname.slice(1).split('/')[0]));
  }
});;

test('listResources2', async () => {
  const pathname = path.resolve(process.cwd(), 'package.json');
  const list = await listResources(pathname);
  assert.equal(list.length, 1);
  assert.equal(list[0].name, 'package.json');
  assert.equal(list[0].pathname, '/package.json');
  assert.equal(list[0].size, fs.readFileSync(pathname).length);
});;

test('listResources3', async () => {
  const pathname = path.resolve(process.cwd(), 'node_modules');
  const list = await listResources(pathname, 2);
  assert(list.length > 0);
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    assert(item.pathname.indexOf('/') === 0);
    assert(item.pathname.slice(1).split('/').length <= 2);
  }
});;
