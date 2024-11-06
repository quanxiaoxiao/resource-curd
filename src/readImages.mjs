import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileTypeFromBuffer } from 'file-type';
import sizeOf from 'image-size';

const MAX_SIZE = 1024 * 1024 * 300;

const walk = async (pathname, maxSize = MAX_SIZE) => {
  try {
    const states = await stat(pathname);
    if (states.isFile()) {
      if (states.size > maxSize) {
        return [];
      }
      const buf = await readFile(pathname);
      const mime = await fileTypeFromBuffer(buf);
      if (!mime) {
        return [];
      }
      if (!/^image\//.test(mime.mime)) {
        return [];
      }
      try {
        const dimensions = await sizeOf.imageSize(buf);
        if (dimensions.width > 0 && dimensions.height > 0) {
          return [
            {
              mime: mime.mime,
              name: path.basename(pathname),
              size: buf.length,
              dateTimeCreate: Math.floor(states.ctimeMs),
              pathname,
              dimensions: {
                width: dimensions.width,
                height: dimensions.height,
              },
            },
          ];
        }
        return [];
      } catch (error) { // eslint-disable-line
        return [];
      }
    }
    const list = await readdir(pathname);
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const name = list[i];
      const ret = await walk(path.resolve(pathname, name), maxSize);
      if (ret) {
        result.push(...ret);
      }
    }
    return result;
  } catch (error) { // eslint-disable-line
    return [];
  }
};

export default async (pathname) => {
  const lengthWithPathname = pathname.length;
  const list = await walk(pathname);
  return list.map((d) => ({
    ...d,
    pathname: d.pathname.slice(lengthWithPathname),
  }));
};
