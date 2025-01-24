import { fileTypeFromBuffer } from 'file-type';

import readResourceBufOfPathname from './readResourceBufOfPathname.mjs';

export default async (pathname) => {
  const buf = await readResourceBufOfPathname(pathname);
  if (!buf) {
    return false;
  }
  try {
    const mime = await fileTypeFromBuffer(buf);
    if (!mime) {
      return false;
    }
    if (!/^image\//.test(mime.mime)) {
      return false;
    }
    return true;
  } catch (error) { // eslint-disable-line
    return false;
  }
};
