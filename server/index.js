const path = require('path')
const express = require('express');
var cors = require("cors");
const db = require('./db')
const PORT = process.env.PORT || 3001;

const app = express();  

const getPage = (id) => { 
    return db[id]
}
app.use(cors())

app.get("/:currentPage", (req, res)=> {
  let currentPage = req.params.currentPage;
  let data = getPage(currentPage)
    ? getPage(currentPage)
    : { data: "no data", logo: "http://localhost:3001/images/error.png" };
  res.json(data);
})

app.use(express.static('public'))

app.listen(PORT, ()=> { 
    console.log(`Server is listening on PORT ${PORT}`);
});