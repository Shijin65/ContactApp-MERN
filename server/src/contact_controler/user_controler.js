const asyncHanler = require("express-async-handler");
const User = require("../model/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register user
// /api/user/register
const registeruser = asyncHanler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(404).json({error : "all the fields a mantatory... "})
    throw new Error("all the fields a mantatory");
  }

  const useravailable = await User.findOne({ email });

  if (useravailable) {
    res.status(400).json({error : "The email already used... "})

    throw new Error("user already exist");
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  console.log(hashedpassword);

  const user = await User.create({
    username,
    email,
    password: hashedpassword,
  });
  console.log(`contact created : ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  }

  res.end();
});

//login user
// /api/user/login
const loginuser = asyncHanler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("email and password are most");
  }

  const user = await User.findOne({ email });
  console.log(user);
//   console.log(user.username);

  if (user && (await bcrypt.compare(password, user.password))) {
    
    const accesstoken = jwt.sign(
                            {
                                user: {
                                username: user.username,
                                email: user.email,
                                id: user.id,
                                },
                            },
                                process.env.SECERT_ACCESSTOKEN,
                            {   expiresIn: "20m" }
    );
    res.status(200).json( {accesstoken , user});
  
  }else{
    res.status(401).json( {error:"check the email and password "} );
    throw new Error("auth error")
    
  }
  res.end();
});

// /api/user/current--------------------------------------------------------------------------
const currentuser = asyncHanler(async (req, res) => {


  res.status(200).json(req.user);
  res.end();
});

module.exports = { registeruser, loginuser, currentuser };
