var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
     res.redirect('/home');
})


app.get('/home', (req, res) => {
     res.render('index');
})

// app.get('/education', (req, res) => {
//      res.render('education');
// })

// app.get('/certificates', (req, res) => {
//      res.render('certificates');
// })

app.get('/project', (req, res) => {
     res.render('project');
})

app.get('*', (req, res) => {
     res.render('404');
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
