const fs = require('fs');
fs.copyFile('dist/nano-coin/index.html', 'dist/nano-coin/404.html', (err) => {
  if (err) throw err;
});
