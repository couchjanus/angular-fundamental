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
server.post('/login', (req, res) => {
    // find if any user matches login credentials
    let user = fetch('http://127.0.0.1:3000/users')
    .then(function(users) {
        // result is parsed body of json
        let filteredUsers = Object.keys(users).filter(user => {
            return user.username === req.body.username && user.password === req.body.password;
        });
        if (filteredUsers.length) {
                // if login details are valid return 200 OK with user details and fake jwt token
                return filteredUsers[0];
        }
    });
    
    if (user) {
        res.json({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: jwtToken
        });
            // return of(new HttpResponse({ status: 200, body: response.json(body) }));
    } else {
        // else return 400 bad request
        res.send(422, 'Username or password is incorrect');
    }
    });
   

// // Handle sign-in requests
// server.post('/sign-in', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   if(username === 'demo' && password === 'demo') {
//     res.json({
//       name: 'SitePoint Reader',
//       token: jwtToken
//     });
//   }
//   res.send(422, 'Invalid username and password');


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


// fetch('http://127.0.0.1:3000/users')
//   .then(function(response) {
//     response.json().then(function(users) {
//       // result is parsed body of foo.json
//       let filteredUsers = users.filter(user => {
//         // return user.username === request.body.username && user.password === request.body.password;
    
//         return user.username === 'admin' && user.password === 'qwerty';
//     });
    
//     if (filteredUsers.length) {
//         // if login details are valid return 200 OK with user details and fake jwt token
//         let user = filteredUsers[0];
//         let body = {
//             id: user.id,
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             token: jwtToken
//         };
    
//         console.log(body);
//     } else {
//         // else return 400 bad request
//         console.log('Username or password is incorrect');
//     }
    

//     });
// });


// Check whether request is allowed
function isAuthorized(req) {
  let bearer = req.get('Authorization');
  if (bearer === 'Bearer ' + jwtToken) {
    return true;
  }
  return false;
}
