//express
const express = require("express");
const app = express();


// connect to database 
const connectDB = require('./config/db')
connectDB()

app.use(express.json({ extended: true }))

//routes
app.use('/register', require('./routes/register')) 
app.use('/auth', require('./routes/auth')) 

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the API server
const PORT = process.env.PORT||5000;


app.listen(PORT, function() {
  console.log(`🌎==> API Server now listening on PORT ${PORT}  `);
});


