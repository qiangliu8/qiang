const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
// mongoose.connection.on('connected', function () {
//     console.log('mongodb connected success')
// })
const models = {
  user: {
    'user': { type: String, require: true },
    'pwd': { type: String, require: true },
    'type': { 'type': String, require: true },
    //头像
    'avator': { 'type': String },
    //个人简介
    'desc': { 'type': String },
    //职位名
    'title': { 'type': String },
    //如果是boss 还有字段
    'company': { 'type': String },
    'money':{'type':String}
  },
  chat: {
    
  }
}
for (let m in models) {
  mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}