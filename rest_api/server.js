const express = require("express");
var app=new express()

app.use(express.json());

const db=require("./models")
db.sequelize.sync().then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("Error: ",err.message)
})
app.get("/", (req, res) => {
    res.send("working");
  });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});