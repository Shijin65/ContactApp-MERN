const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validuser = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    // console.log("TOKEN IS :", token);
    jwt.verify(token, process.env.SECERT_ACCESSTOKEN, (err, decoded) => {
      if (!err) {
        req.user = decoded.user;
        // console.log(JSON.stringify(req.user));
      } else {
        res
          .status(401)
          .json({ error: "either the token is not valid or It is Expired" });
        throw new Error("token validation failed");
      }

      next();
    });
  }
  if (!token) {
    res.status(401);
    throw new Error("user is not authorized or token is missing");
  }
});

module.exports = validuser;
