const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(bodyParser.json()); // Parse JSON request bodies

// Define custom routes for registration and login
server.post('/register', (req, res) => {
  const { name, email, phone, password } = req.body; // Include password if used
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const user = { id: Date.now().toString(), name, email, phone };
  server.db.get('users').push(user).write();
  res.status(201).json(user);
});

server.post('/login', (req, res) => {
  const { email, password } = req.body; // Include password if used
  const user = server.db.get('users').find({ email }).value();

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Apply middlewares before authentication
server.use(middlewares);

// Configure json-server-auth
const rules = {
  users: {
    'GET': true,
    'POST': true,
    'PUT': true,
    'PATCH': true,
    'DELETE': true
  },
  // Define rules for other endpoints if necessary
};

server.use(auth(rules));

// Use the router to handle API requests
server.use(router);

// Set the port for the server to listen on
const PORT = process.env.PORT || 5002;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
