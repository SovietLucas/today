const express = require("express")
const params = require("params")
const query = require("query")
const noblox = require("noblox.js")

const app = express()



app.get("/get",(req, res)=>{
{ 
   const smth = req.query.username
    res.send(smth);

    
}
})

app.listen(5000,()=>
{
console.log("app is working")

})
{
}