const path = require('path');

module.exports = path.dirname(require.main.filename);
// This utility function returns the directory name of the main module, which is useful for constructing paths relative to the main application file.
