const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // header names are always lowercase
  let token;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1]; // get token after 'Bearer'
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach decoded user info to request
    console.log("✅ Decoded user:", req.user);
    next(); // continue to next route
  } catch (err) {
    return res.status(400).json({ message: "Token is not valid" });
  }
};

module.exports = verifyToken;
