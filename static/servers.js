const express=require("express");    //引入express模块
const app=express(); 
const fs=require("fs");              //引入fs模块
// const url=require("url");

var bodyParser = require('body-parser')               //实例化express

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000)    // 指定端口;
app.get('/',function(req, res){      //匹配主页的get请求
    res.send("首页")
})
//登录;
app.post("/delv",function(req,res){
    console.log(req.body)
    if(req.body.username === ''|| req.body.passwd === '' ){
        res.send({
            'code':1,
            'msg':'用户名或密码不能为空'
        })
    }else if(req.body.username !== 'admin' || req.body.passwd !== '000000'){
        res.send({
            'code':2,
            'msg':'用户名或密码错误'
        })
    }else{
        res.send({
            'code':0,
            'msg':'登录成功'
        })
    }
})
app.post("/register",function(req,res){
    console.log(req.body)
    if(req.body.username === '' ){
        res.send({
            'code':1,
            'msg':'用户名不能为空'
        })
    }else if(req.body.passwd === ''){
        res.send({
            'code':2,
            'msg':'密码不能为空'
        })
    }else if( req.body.passwd !== req.body.passwd2){
        res.send({
            'code':3,
            'msg':'密码不一致'
        })
    }else{
        res.send({
            'code':0,
            'msg':'注册成功'
        })
    }
})
