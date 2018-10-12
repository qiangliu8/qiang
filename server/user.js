const express = require('express')
const utils = require('utility')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/info', function(req, res) {
    const { userId } = req.cookies
    if (!userId) {
        return res.json({ code: 1 })
    }
    User.findOne({ _id: userId }, _filter, function(err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了' })
        }
        if (doc) {
            return res.json({ code: 0, data: doc })
        }
    })
})
Router.get('/list', function(req, res) {
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
})

Router.post('/register', function(req, res) {
    console.log(req.body)
    const { user, pwd, type } = req.body
    User.findOne({ user }, function(err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '账号已存在' })
        }
        const userModel = new User({ user, type, pwd: md5Pwd(pwd) })
        userModel.save(function (e, d) {
            if (e) {
                return res.json({ code: 1, msg: '后端出错了' })
            }
            const { user, type, _id } = d
            res.cookie('userId', _id)
            return res.json({ code: 0, data:{ user, type, _id }})
        })
    })
})
Router.post('/login', function(req, res) {
    const { user, pwd } = req.body
    User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function(err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '用户名或密码错误' })
        }
        res.cookie('userId', doc._id)
        return res.json({ code: 0, data: doc })
    })

})
Router.post('/update', function (req, res) {
    const userId = req.cookies.userId
    if (!userId) {
        return res.json.dumps({code:1})
    }
    const body = req.body
    console.log(body)
    console.log(userId)
    User.findByIdAndUpdate( userId , body, function (err, doc) {
        const data = Object.assign({}, {
            user: doc.user,
            type:doc.type   
        }, body)
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + doc);
        }
        // console.log(doc)
        return res.json({ code: 0, data })
    })

})

function md5Pwd(pwd) {
    const jia = 'plan_to_paly'
    return utils.md5(utils.md5(pwd + jia))
}
module.exports = Router
    //类似于mysql的表 mongo里有文档 字段的概念
    // const User = mongoose.model('user', new mongoose.Schema({
    //     user: { type: String, require: true },
    //     age:{type:Number,require:true}
    // }))
    //新增数据
    // User.create({
    //     user: 'xiaohua',
    //     age:14
    // }, function (err, doc) {
    //     if (!err) {
    //         console.log(doc)
    //     } else {
    //         console.log(err)
    //     }
    // })
    //删除数据
    // User.remove({}, function (err, doc) {
    //     if (!err) {
    //         console.log(doc)
    //     } else {
    //         console.log(err)
    //     }
    // })

//更新数据
// User.update({'user':'xiaohua'},{'$set':{age:26}},function (err, doc){
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })