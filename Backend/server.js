require('dotenv').config()
const app = require("./app");
const dbConnected = require('./Config/config');

const port = process.env.PORT || 4000

app.listen(port, async ()=>{
    console.log(`server is running in http://localhost:${port}`)
   await dbConnected()
})
