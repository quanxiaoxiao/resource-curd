# Node.js 文件系统操作工具库文档

## 概述

该工具库提供了一系列用于处理文件和目录的 Node.js 函数。这些函数可以帮助你读取文件内容、获取文件元数据、遍历目录、检查文件类型等。以下是每个函数的详细说明和使用示例。

## 函数列表

1. **readResourceOfPathname**
2. **readDirs**
3. **readResources**
4. **readImageOfPathname**
5. **readImages**
6. **readResourceBufOfPathname**
7. **isImageOfPathname**

---

### 1. `readResourceOfPathname`

**功能**: 读取指定路径的文件内容，并返回文件的缓冲区、MIME 类型、创建时间和修改时间。

**参数**:
- `pathname` (string): 文件路径。

**返回值**:
- `Object`:
  - `buf` (Buffer): 文件内容的缓冲区。
  - `mime` (string | null): 文件的 MIME 类型。
  - `dateTimeCreate` (number): 文件的创建时间（毫秒）。
  - `dateTimeUpdate` (number): 文件的修改时间（毫秒）。
- 如果路径不是文件或读取失败，返回 `null`。

**示例**:
```javascript
import readResourceOfPathname from './readResourceOfPathname.mjs';

const result = await readResourceOfPathname('path/to/file.txt');
console.log(result);
```

---

### 2. `readDirs`

**功能**: 读取指定路径下的所有子目录。

**参数**:
- `pathname` (string): 目录路径。

**返回值**:
- `Array<string>`: 子目录名称的数组。
- 如果路径不是目录或读取失败，返回空数组 `[]`。

**示例**:
```javascript
import readDirs from './readDirs.mjs';

const dirs = await readDirs('path/to/directory');
console.log(dirs);
```

---

### 3. `readResources`

**功能**: 递归读取指定路径下的所有文件和目录，返回文件的基本信息。

**参数**:
- `pathname` (string): 目录路径。
- `maxDepth` (number, 可选): 最大递归深度，默认为无限。

**返回值**:
- `Array<Object>`:
  - `name` (string): 文件或目录的名称。
  - `dateTimeCreate` (number): 创建时间（毫秒）。
  - `dateTimeUpdate` (number): 修改时间（毫秒）。
  - `size` (number): 文件大小（字节）。
  - `pathname` (string): 相对路径。

**示例**:
```javascript
import readResources from './readResources.mjs';

const resources = await readResources('path/to/directory', 2);
console.log(resources);
```

---

### 4. `readImageOfPathname`

**功能**: 读取指定路径的图片文件，并返回图片的缓冲区、MIME 类型、创建时间、修改时间和尺寸。

**参数**:
- `pathname` (string): 图片文件路径。

**返回值**:
- `Object`:
  - `buf` (Buffer): 图片内容的缓冲区。
  - `mime` (string): 图片的 MIME 类型。
  - `dateTimeCreate` (number): 创建时间（毫秒）。
  - `dateTimeUpdate` (number): 修改时间（毫秒）。
  - `dimensions` (Object): 图片尺寸。
    - `width` (number): 图片宽度。
    - `height` (number): 图片高度。
- 如果路径不是图片文件或读取失败，返回 `null`。

**示例**:
```javascript
import readImageOfPathname from './readImageOfPathname.mjs';

const image = await readImageOfPathname('path/to/image.png');
console.log(image);
```

---

### 5. `readImages`

**功能**: 递归读取指定路径下的所有图片文件，返回图片的基本信息。

**参数**:
- `pathname` (string): 目录路径。
- `maxDepth` (number, 可选): 最大递归深度，默认为无限。

**返回值**:
- `Array<Object>`:
  - `mime` (string): 图片的 MIME 类型。
  - `name` (string): 图片名称。
  - `size` (number): 图片大小（字节）。
  - `dateTimeCreate` (number): 创建时间（毫秒）。
  - `pathname` (string): 相对路径。
  - `dimensions` (Object): 图片尺寸。
    - `width` (number): 图片宽度。
    - `height` (number): 图片高度。

**示例**:
```javascript
import readImages from './readImages.mjs';

const images = await readImages('path/to/directory', 2);
console.log(images);
```

---

### 6. `readResourceBufOfPathname`

**功能**: 读取指定路径的文件内容，并返回文件的缓冲区。

**参数**:
- `pathname` (string): 文件路径。

**返回值**:
- `Buffer`: 文件内容的缓冲区。
- 如果路径不是文件或读取失败，返回 `null`。

**示例**:
```javascript
import readResourceBufOfPathname from './readResourceBufOfPathname.mjs';

const buf = await readResourceBufOfPathname('path/to/file.txt');
console.log(buf);
```

---

### 7. `isImageOfPathname`

**功能**: 检查指定路径的文件是否为图片文件。

**参数**:
- `pathname` (string): 文件路径。

**返回值**:
- `boolean`: 如果文件是图片文件，返回 `true`，否则返回 `false`。

**示例**:
```javascript
import isImageOfPathname from './isImageOfPathname.mjs';

const isImage = await isImageOfPathname('path/to/image.png');
console.log(isImage); // true or false
```
