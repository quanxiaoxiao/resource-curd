# Node.js File System Utility Library Documentation

## Overview

This utility library provides a collection of Node.js functions for handling files and directories. These functions allow you to read file content, retrieve file metadata, traverse directories, check file types, and more. Below is the detailed documentation for each function, along with usage examples.

## Function List

1. **readResourceOfPathname**
2. **readDirs**
3. **readResources**
4. **readImageOfPathname**
5. **readImages**
6. **readResourceBufOfPathname**
7. **isImageOfPathname**

---

### 1. `readResourceOfPathname`

**Description**: Reads the content of a file at the specified path and returns the file buffer, MIME type, creation time, and modification time.

**Parameters**:
- `pathname` (string): The file path.

**Returns**:
- `Object`:
  - `buf` (Buffer): The file content buffer.
  - `mime` (string | null): The MIME type of the file.
  - `dateTimeCreate` (number): The file creation time in milliseconds.
  - `dateTimeUpdate` (number): The file modification time in milliseconds.
- Returns `null` if the path is not a file or if reading fails.

**Example**:
```javascript
import readResourceOfPathname from './readResourceOfPathname.mjs';

const result = await readResourceOfPathname('path/to/file.txt');
console.log(result);
```

---

### 2. `readDirs`

**Description**: Reads all subdirectories in the specified directory.

**Parameters**:
- `pathname` (string): The directory path.

**Returns**:
- `Array<string>`: An array of subdirectory names.
- Returns an empty array `[]` if the path is not a directory or if reading fails.

**Example**:
```javascript
import readDirs from './readDirs.mjs';

const dirs = await readDirs('path/to/directory');
console.log(dirs);
```

---

### 3. `readResources`

**Description**: Recursively reads all files and directories in the specified path and returns basic information about the files.

**Parameters**:
- `pathname` (string): The directory path.
- `maxDepth` (number, optional): The maximum recursion depth. Defaults to infinite.

**Returns**:
- `Array<Object>`:
  - `name` (string): The name of the file or directory.
  - `dateTimeCreate` (number): The creation time in milliseconds.
  - `dateTimeUpdate` (number): The modification time in milliseconds.
  - `size` (number): The file size in bytes.
  - `pathname` (string): The relative path.

**Example**:
```javascript
import readResources from './readResources.mjs';

const resources = await readResources('path/to/directory', 2);
console.log(resources);
```

---

### 4. `readImageOfPathname`

**Description**: Reads an image file at the specified path and returns the image buffer, MIME type, creation time, modification time, and dimensions.

**Parameters**:
- `pathname` (string): The image file path.

**Returns**:
- `Object`:
  - `buf` (Buffer): The image content buffer.
  - `mime` (string): The MIME type of the image.
  - `dateTimeCreate` (number): The creation time in milliseconds.
  - `dateTimeUpdate` (number): The modification time in milliseconds.
  - `dimensions` (Object): The image dimensions.
    - `width` (number): The image width.
    - `height` (number): The image height.
- Returns `null` if the path is not an image file or if reading fails.

**Example**:
```javascript
import readImageOfPathname from './readImageOfPathname.mjs';

const image = await readImageOfPathname('path/to/image.png');
console.log(image);
```

---

### 5. `readImages`

**Description**: Recursively reads all image files in the specified directory and returns basic information about the images.

**Parameters**:
- `pathname` (string): The directory path.
- `maxDepth` (number, optional): The maximum recursion depth. Defaults to infinite.

**Returns**:
- `Array<Object>`:
  - `mime` (string): The MIME type of the image.
  - `name` (string): The name of the image file.
  - `size` (number): The image size in bytes.
  - `dateTimeCreate` (number): The creation time in milliseconds.
  - `pathname` (string): The relative path.
  - `dimensions` (Object): The image dimensions.
    - `width` (number): The image width.
    - `height` (number): The image height.

**Example**:
```javascript
import readImages from './readImages.mjs';

const images = await readImages('path/to/directory', 2);
console.log(images);
```

---

### 6. `readResourceBufOfPathname`

**Description**: Reads the content of a file at the specified path and returns the file buffer.

**Parameters**:
- `pathname` (string): The file path.

**Returns**:
- `Buffer`: The file content buffer.
- Returns `null` if the path is not a file or if reading fails.

**Example**:
```javascript
import readResourceBufOfPathname from './readResourceBufOfPathname.mjs';

const buf = await readResourceBufOfPathname('path/to/file.txt');
console.log(buf);
```

---

### 7. `isImageOfPathname`

**Description**: Checks if the file at the specified path is an image file.

**Parameters**:
- `pathname` (string): The file path.

**Returns**:
- `boolean`: Returns `true` if the file is an image, otherwise `false`.

**Example**:
```javascript
import isImageOfPathname from './isImageOfPathname.mjs';

const isImage = await isImageOfPathname('path/to/image.png');
console.log(isImage); // true or false
```
