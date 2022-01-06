require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET__TOKEN, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      req.decoded = decoded;
    }
    next();
  });
}
// const authToken  = jwt.verify(
//     req.token,
//     "mynameisamarnathlaishramfromnambol",
//     (err) => {
//       if (err) {
//         console.log("error");
//         res.sendStatus(403);
//       } else {
//         console.log("Here");
//         res.status(statusCode).json(results);
//       }
//     }
//   );

module.exports = {
  authenticateToken,
};
