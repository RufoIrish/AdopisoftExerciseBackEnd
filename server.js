var express = require('express')
var cors = require('cors')
var app = express()
var port = 2000;
app.use(cors())
 
var items = [];

app.get('/items', (req, res) => {
  res.send({status: true, data: items});
})

app.get('/addItem/:itemName/:sales', (req, res) => {
    console.log(req.params);
    // items.push(req.body)
    items.push({name: req.params.itemName,
      sales: req.params.sales})
    res.send({status: true, data: items})
}) 

app.listen(port, () => {
  console.log('CORS-enabled web server listening on port ' + port)
})