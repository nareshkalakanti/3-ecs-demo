const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("We are on ECS demo")
});

app.get('/health',(req,res)=>{
  throw new Error('Error');
  res.status(200).send('App is up and running')
})

app.listen(port, () => {
  console.log(`Server is  listening on port http://localhost:${port}`)
});