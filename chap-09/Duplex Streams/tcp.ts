const net = require('net'),
  fs = require('fs');

const server = net.createServer((connect) => {
  const log = fs.createWriteStream('eli.log');
  console.log('Connection established');
  connect.on('end', () => {
    console.log('Connection ended');
  });
  connect.write("Welcome to our airline customer hotline.\r\n");
  connect.write("We call it ELI: the Electronic Listening Interface.\r\n");
  connect.write("We'll repeat back your message and log it for further review.\r\n");
  connect.pipe(connect).pipe(log);
});

server.listen(7777, () => {
  console.log('Server ready on port 7777');
});