const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mocks/db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const fetch =  require('node-fetch');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Sample JWT token for demo purposes
// const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJ' +
  // 'lYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';

const RSA_PRIVATE_KEY = fs.readFileSync('./jwtRS256.key');

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
                return user.email === request.body.email && user.password === request.body.password;
            });
            
            if (filteredUsers.length) {
              let setRole = filteredUsers[0].isAdmin ? 'admin':'user';
              const jwtBearerToken = jwt.sign({role: setRole}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: 'userId'
              });
              console.log(jwtBearerToken);
              // response.cookie ('SESSIONID', jwtBearerToken, {httpOnly: true, secure: true});
              // if login details are valid return 200 OK with user details and fake jwt token
              // return of(new HttpResponse({ status: 200, body: response.json(body) }));
              response.status(200).json({
                    id: filteredUsers[0].id,
                    username: filteredUsers[0].username,
                    email: filteredUsers[0].email,
                    isAdmin: filteredUsers[0].isAdmin,
                    firstName: filteredUsers[0].firstName,
                    lastName: filteredUsers[0].lastName,
                    token: jwtBearerToken,
                    expiresIn: 120,
                    role: setRole
                });
                
            } else {
                // else return 400 bad request
                response.status(422).send('Username or password is incorrect');
            }
          });
        } else {
          console.log('Network request for dbase failed with response ' + response.status + ': ' + response.statusText);
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
  if (bearer === 'Bearer ' + jwtBearerToken) {
    return true;
  }
  return false;
}
