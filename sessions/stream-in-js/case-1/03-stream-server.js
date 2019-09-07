const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./test.file',{
    highWaterMark: 8 * 1024
  });
  src.pipe(res);
});

server.listen(8000);
