const { User } = require('../models/User');

let auth = (req, res, next) => {

    // 인증 처리 하는 곳


    // 쿠키에서 토큰을 가져옴
    let token = req.cookies.x_auth;

    // 토큰 복호화 -> 유저 찾기
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true});

        req.token = token;
        req.user = user;
        next(); // next가 있어야 미들웨어에서 탈출할 수 있음
    })

    // 유저가 있으면 인증 o

    // 유저가 없으면 인증 x


}

module.exports = { auth };