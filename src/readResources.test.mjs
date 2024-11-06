import test from 'node:test';
import fs from 'node:fs';
import process from 'node:process';
import url from 'node:url';
import path from 'node:path';
import assert from 'node:assert';
import readResources from './readResources.mjs';

test('readResources', async () => {
  const dir = path.resolve(process.cwd(), 'src');
  const list = await readResources(dir);
  assert(list.length > 0);
  const currentResourcePathname = url.fileURLToPath(import.meta.url);
  assert(!!list.find((d) => path.join(dir, d.pathname) === currentResourcePathname));
});;

test('readResources2', async () => {
  const dir = path.resolve(process.cwd(), 'node_modules');
  const list = await readResources(dir);
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

test('readResources2', async () => {
  const pathname = path.resolve(process.cwd(), 'package.json');
  const list = await readResources(pathname);
  assert.equal(list.length,  1);
  assert.equal(list[0].name, 'package.json');
  assert.equal(list[0].pathname, '/package.json');
  assert.equal(list[0].size, fs.readFileSync(pathname).length);
});;

test('readResources3', async () => {
  const pathname = path.resolve(process.cwd(), 'node_modules');
  const list = await readResources(pathname, 2);
  assert(list.length > 0);
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    assert(item.pathname.indexOf('/') === 0);
    assert(item.pathname.slice(1).split('/').length <= 2);
  }
});;
