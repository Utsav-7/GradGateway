const express = require('express');
const path = require('path')
const app = express()
const connectToDatabase = require('./database.js');

app.use(express.static('../public'))


// app.listen
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})

app.get('/placements', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const placements = await db.collection('placements').find({}).toArray();
    res.json(placements);
  } catch (error) {
    console.error('Error retrieving placements:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// setup static and middleware
app.use(express.static('./public'))

// app.get
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
    // adding to static assets
    // SSR (Server Side Rendering)
})
app.get('/admin',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/error404.html'))
})