import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split("")[1];
    if (!token) {
      return res.status(401).send("Authorization denied");
    }
  }

  try {
    const decode = jwt.verify(token, "SecretKey");
    req.coder = decode;
    console.log("The decoded user is:", req.coder);
  } catch (error) {
    res.status(400).send("Token invalid");
  }
};

export default { verifyToken };
