const express = require('express')
const bodyParse = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

const app = express()
//链接monogo
app.use(cookieParser())
app.use(bodyParse.json())
app.use('/user',userRouter)


//新建app
// const app = express()
// app.get('/', function (req, res) {
//     res.send('<h1>hello world</h1>')
// })
app.listen(9093, function () {
    console.log('node APP start at port 9093')
})
// app.get('/data', function (req, res) {
//     User.findOne({}, function (err, doc) {
//       return  res.json(doc)
//     })
//     //res.json({name:'liu1',type:'qiang1'})
// })