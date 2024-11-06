import { readFile, stat } from 'node:fs/promises';

export default async (pathname) => {
  try {
    const states = await stat(pathname);
    if (!states.isFile()) {
      return null;
    }
    const buf = await readFile(pathname);
    return buf;
  } catch (error) { // eslint-disable-line
    return null;
  }
};
