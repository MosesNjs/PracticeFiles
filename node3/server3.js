const express = require('express') 
const app = express()





app.get('/', (req, res) =>{
    // console.log(req.url);
// res.send(`here's your response good sir`)
res.sendFile(__dirname + '/home/indexhome.html')
})

// app.use('/', () => console.log('info gotten'))

app.get('/indexabout', (req, res) =>{
    res.sendFile(__dirname + '/home/indexabout.html')
    console.log('about page sent')
    })



app.use((req, res) =>{
    res.sendFile(__dirname + '/home/404.html')
    })

app.listen(3000, () => {
    console.log('eavesdroppping now in progress')
    })