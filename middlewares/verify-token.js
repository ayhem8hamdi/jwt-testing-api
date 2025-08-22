const jwt=require("jsonwebtoken");

function verifyTokenValidity(req,res,next) {  
    const token = req.headers.token;
    if (!token) {
        res.status(401).json({message: "No Token Provided"});
        return;
    }
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=decoded; // decoded is an object contains jwt payload
        next();
    } catch (error) {
          res.status(401).json({message: "Verify Your Token"});
        return;
    }
}


function isAuthorized(req,res,next) {
    if (req.user.userId === req.params.id ) {
      return next();
    }
  return  res.status(403).json({message: "Action Unauthorized"});
}

module.exports={verifyTokenValidity,isAuthorized};