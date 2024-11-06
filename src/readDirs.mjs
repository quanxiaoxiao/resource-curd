import path from 'node:path';
import { readdir, stat } from 'node:fs/promises';

export default async (pathname) => {
  try {
    const states = await stat(pathname);
    if (!states.isDirectory()) {
      return [];
    }
    const nameList = await readdir(pathname);
    const result = [];
    await nameList.reduce(async (acc, cur) => {
      await acc;
      const s = await stat(path.join(pathname, cur));
      if (s.isDirectory()) {
        result.push(cur);
      }
    }, Promise.resolve);
    return result;
  } catch (error) { // eslint-disable-line
    return [];
  }
};
