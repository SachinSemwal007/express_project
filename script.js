const express = require('express')
const app = express()



app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render("index")
})

app.get('/contact', function (req, res, next) {
  res.render("contact" , {name: "Sachin's Crew"})
})

app.get('/error', function (req, res) {
   throw new error("Broken Link Found/Something went wrong")
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})


app.listen(3000)





//Middleware
// app.use(function(req, res, next){
//     console.log("Middleware Working")
//     next()
// })
 




// app.get('/profile', function (req, res) {
//     res.send('Hello from profile')
//   })

  
// app.get('/profile/:username',(req, res) =>{
//     res.send(`Hello from ${req.params.username}`)
//   })




