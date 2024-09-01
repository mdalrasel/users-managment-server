const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const users = [
    {id:1, name:'sabana', email:'sabana@gmail.com'},
    {id:2, name:'sabnur', email:'sabnur@gmail.com'},
    {id:3, name:'popy', email:'popy@gmail.com'},
    {id:4, name:'mousumi', email:'mousumi@gmail.com'},
    {id:5, name:'purnima', email:'purnima@gmail.com'}
]

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(res,req)=>{
    console.log(req.body)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})