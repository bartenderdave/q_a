const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const qaRoutes = require('./routes/qaRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();


//MongoDB:
const url = "mongodb://localhost:27017/q_a";
mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true  });

const db = mongoose.connection
db.once('open', _ => {
  console.log('database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

//listen:
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, () => {
  console.log("Server is listening on port %s", port);
});


//middlewares:
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());


//view engine:
app.set('view engine', 'ejs');



// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.use(authRoutes);
app.use(qaRoutes);










