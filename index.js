const express = require("express")
const params = require("params")

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
