import mime from 'mime-types';
import readResourceBufOfPathname from './readResourceBufOfPathname.mjs';

export default async (pathname) => {
  const buf = await readResourceBufOfPathname(pathname);
  if (!buf) {
    return null;
  }
  return {
    mime: mime.lookup(pathname) || null,
    buf,
  };
}
