const file = require("fs");
const deleteFile = (filePath) => {
  fstat.unlink((filePath, err) => {
    if (err) {
      throw err;
    }
  });
};

exports.deleteFile = deleteFile;
