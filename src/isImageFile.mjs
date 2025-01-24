import { fileTypeFromBuffer } from 'file-type';

import readFileBuffer from './readFileBuffer.mjs';

export default async (pathname) => {
  const buf = await readFileBuffer(pathname);
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
