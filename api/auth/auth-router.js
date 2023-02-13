const router = require("express").Router();
const md = require("./auth-middleware");

const UsersModel= require("../users/users-model");

// `checkUsernameFree`, `checkUsernameExists` ve `checkPasswordLength` gereklidir (require)
// `auth-middleware.js` deki middleware fonksiyonları. Bunlara burda ihtiyacınız var!


/**
  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  durum 200
  {
    "user_id": 2,
    "username": "sue"
  }

  response username alınmış:
  durum 422
  {
    "mesaj": "Username kullaniliyor"
  }

  response şifre 3 ya da daha az karakterli:
  durum 422
  {
    "mesaj": "Şifre 3 karakterden fazla olmalı"
  }
 */
  router.post("/register",(req,res,next)=>{
    try{
      res.json({
        message:"Auth register çalışıyor"
      })

    }catch(err){
      next(err)
    }
  })

/**
  2 [POST] /api/auth/login { "username": "sue", "password": "1234" }

  response:
  durum 200
  {
    "mesaj": "Hoşgeldin sue!"
  }

  response geçersiz kriter:
  durum 401
  {
    "mesaj": "Geçersiz kriter"
  }
 */
  router.post("/login",(req,res,next)=>{
    try{
      res.json({
        message:"Auth login çalışıyor"
      })

    }catch(err){
      next(err)
    }
  })

/**
  3 [GET] /api/auth/logout

  response giriş yapmış kullanıcılar için:
  durum 200
  {
    "mesaj": "çıkış yapildi"
  }

  response giriş yapmamış kullanıcılar için:
  durum 200
  {
    "mesaj": "oturum bulunamadı"
  }
 */
  router.get("/logout",(req,res,next)=>{
    try{
      res.json({
        message:"Auth logout çalışıyor"
      })

    }catch(err){
      next(err)
    }
  })
 
// Diğer modüllerde kullanılabilmesi için routerı "exports" nesnesine eklemeyi unutmayın.

module.exports=router