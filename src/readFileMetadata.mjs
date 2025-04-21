import { readFile, stat } from 'node:fs/promises';

import mime from 'mime-types';

export default async (pathname) => {
  try {
    const states = await stat(pathname);
    if (!states.isFile()) {
      return null;
    }
    const buf = await readFile(pathname);
    return {
      buf,
      mime: mime.lookup(pathname) || null,
      dateTimeCreate: Math.floor(states.ctimeMs),
      dateTimeUpdate: Math.floor(states.mtimeMs),
    };
  } catch (error) {
    return null;
  }
};
