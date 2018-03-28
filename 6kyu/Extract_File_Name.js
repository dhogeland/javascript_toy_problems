class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      let x = dirtyFileName.indexOf('_'),
          y = dirtyFileName.indexOf('.'),
          copy = dirtyFileName.slice().split('.');
      return dirtyFileName.slice((x + 1), y) + '.' + copy[1];
    }
}
