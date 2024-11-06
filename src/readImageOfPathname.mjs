import { fileTypeFromBuffer } from 'file-type';
import readResourceBufOfPathname from './readResourceBufOfPathname.mjs';

export default async (pathname) => {
  const buf = await readResourceBufOfPathname(pathname);
  if (!buf) {
    return null;
  }
  try {
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
    };
  } catch (error) { // eslint-disable-line
    return null;
  }
};
