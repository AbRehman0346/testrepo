// Import the 'http' module to create a server
const http = require('http');

// Define the port to listen on
const port = process.env.PORT || 3000;


// Create a server that responds with a simple message
const server = http.createServer((req, res) => {
  // Set the status code and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Respond with a simple message
  res.end(`Server is running on port: ${port}`);
});



// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
