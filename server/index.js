const server = JsonServer.create()
const jwt = require('jsonwebtoken');
// const server = JsonServer.create()
const middleware = (req,res ,next)=>{
    next();
}
server.use(middleware)
// server.use(router)

router.post('/SignUp',(req ,res)=>{
    const{username ,password}= req.body;
    // Try to find the user with the provided username and password
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        // Return an error response if credentials are invalid
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    // Generate a JWT token using the user ID and a secret key
    const token = jwt.sign({ userId: user.id }, 'your_secret_key');

    // Return a successful response with the token
    res.json({ token });
})
server.use(router)