# Node.js File Utilities Documentation

## Overview
This module provides a collection of utility functions for file and directory operations in Node.js, focusing on file metadata, resource reading, and image handling.

## Install

```shell
npm install @quanxiaoxiao/resource-curd
```

## Exported Functions

### 1. `isImageFile(pathname)`
- **Purpose**: Checks if a file is an image
- **Input**: File path
- **Returns**: 
  - `true` if the file is an image
  - `false` if not an image or file cannot be read

### 2. `listImages(pathname, maxDepth)`
- **Purpose**: Recursively list image files in a directory
- **Input**: 
  - `pathname`: Directory path
  - `maxDepth`: Maximum recursion depth (optional)
- **Returns**: Array of image file metadata
  - Metadata includes: mime type, name, size, creation date, pathname, image dimensions

### 3. `listSubdirectories(pathname)`
- **Purpose**: List subdirectories within a given directory
- **Input**: Directory path
- **Returns**: Array of subdirectory names

### 4. `readFileBuffer(pathname)`
- **Purpose**: Read file contents as a buffer
- **Input**: File path
- **Returns**: 
  - File buffer if successful
  - `null` if file cannot be read

### 5. `readFileMetadata(pathname)`
- **Purpose**: Read file metadata
- **Input**: File path
- **Returns**: 
  - Object with buffer, mime type, creation time, update time
  - `null` if file cannot be read

### 6. `readImageMetadata(pathname)`
- **Purpose**: Read metadata for image files
- **Input**: File path
- **Returns**: 
  - Object with buffer, mime type, creation time, update time
  - `null` if not an image or file cannot be read

### 7. `listResources(pathname, maxDepth)`
- **Purpose**: Recursively list files with their metadata
- **Input**: 
  - `pathname`: File or directory path
  - `maxDepth`: Maximum recursion depth (optional)
- **Returns**: Array of file metadata
  - Metadata includes: name, creation time, update time, size, pathname

## Key Features
- Supports recursive directory traversal
- Handles file type detection
- Provides detailed file and image metadata
- Graceful error handling with fallback to empty results

## Dependencies
- `node:fs/promises`
- `file-type`
- `image-size`
- `mime-types`

## Usage Example
```javascript
import { listResources, listImages } from '@quanxiaoxiao/resource-curd';

// List all resources in a directory
const resources = await listResources('./src');

// Find all images in a directory
const images = await listImages('./images', 2);
```

## Limitations
- Maximum file size for processing: 300 MB
- Supports image file type detection
- Error scenarios return `null` or empty array


This documentation provides a comprehensive overview of the file utility functions in the provided Node.js module. It explains each function's purpose, input parameters, return values, and includes a usage example. Would you like me to elaborate on any specific part of the documentation?
