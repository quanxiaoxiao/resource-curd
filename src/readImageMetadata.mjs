import { readFile, stat } from 'node:fs/promises';

import { fileTypeFromBuffer } from 'file-type';

export default async (pathname) => {
  try {
    const states = await stat(pathname);
    if (!states.isFile()) {
      return null;
    }
    const buf = await readFile(pathname);
    const mime = await fileTypeFromBuffer(buf);
    if (!mime) {
      return null;
    }
    if (!/^image\//.test(mime.mime)) {
      return null;
    }
    return {
      buf,
      mime: mime.mime,
      dateTimeCreate: Math.floor(states.ctimeMs),
      dateTimeUpdate: Math.floor(states.mtimeMs),
    };
  } catch (error) {
    return null;
  }
};
