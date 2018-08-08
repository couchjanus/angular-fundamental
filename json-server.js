const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mocks/db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const fetch =  require('node-fetch');

// Sample JWT token for demo purposes
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJ' +
  'lYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';

// Use default middlewares (CORS, static, etc)
server.use(middlewares);

// Make sure JSON bodies are parsed correctly
server.use(bodyParser.json());

// Handle sign-in requests
server.post('/login', (request, response) => {
    // find if any user matches login credentials
    fetch('http://127.0.0.1:3000/users').then(function(data) {
        if(data.ok) {
          data.json().then(function(users) {
            let filteredUsers = users.filter(user => {
                return user.username === request.body.username && user.password === request.body.password;
            });
            console.log(request.body.username, request.body.password);
            if (filteredUsers.length) {
                // if login details are valid return 200 OK with user details and fake jwt token
                // return of(new HttpResponse({ status: 200, body: response.json(body) }));
                response.json({
                    id: filteredUsers[0].id,
                    username: filteredUsers[0].username,
                    isAdmin: filteredUsers[0].isAdmin,
                    firstName: filteredUsers[0].firstName,
                    lastName: filteredUsers[0].lastName,
                    token: jwtToken
                });
            } else {
                // else return 400 bad request
                response.send(422, 'Username or password is incorrect');
            }
          });
        } else {
          console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
});
 
// Protect other routes
// server.use((req, res, next) => {
//   if (isAuthorized(req)) {
//     console.log('Access granted');
//     next();
//   } else {
//     console.log('Access denied, invalid JWT');
//     res.sendStatus(401);
//   }
// });

// API routes
server.use(router);

// Start server
server.listen(3000, () => {
  console.log('JSON Server is running');
});

// Check whether request is allowed
function isAuthorized(req) {
  let bearer = req.get('Authorization');
  if (bearer === 'Bearer ' + jwtToken) {
    return true;
  }
  return false;
}
