class FS_Proxy {
  constructor(fs_subject){
    this.fs = fs_subject
  }

  readFile(path, format, callback){
    if(!path.match(/.md|.MD/)){
      return callback(new Error('Do not support this format'))
    }

    this.fs.readFile(path, format, callback);
  }
}

module.exports = FS_Proxy