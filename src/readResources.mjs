import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const walk = async (pathname, depth, maxDepth) => {
  if (depth > maxDepth) {
    return [];
  }
  try {
    const states = await stat(pathname);
    if (states.isFile()) {
      return [
        {
          name: path.basename(pathname),
          dateTimeCreate: Math.floor(states.ctimeMs),
          dateTimeUpdate: Math.floor(states.mtimeMs),
          size: states.size,
          pathname,
        },
      ];
    }
    const list = await readdir(pathname);
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const name = list[i];
      const ret = await walk(path.resolve(pathname, name), depth + 1, maxDepth);
      if (ret) {
        result.push(...ret);
      }
    }
    return result;
  } catch (error) { // eslint-disable-line
    return null;
  }
};

export default async (pathname, maxDepth) => {
  if (maxDepth != null && maxDepth === 0) {
    return [];
  }
  const lengthWithPathname = pathname.length;
  const list = await walk(pathname, 0, maxDepth || Infinity);
  return list.map((d) => {
    if (d.pathname.length === lengthWithPathname) {
      return {
        ...d,
        pathname: `/${d.name}`,
      };
    }
    return {
      ...d,
      pathname: d.pathname.slice(lengthWithPathname),
    };
  });
};
