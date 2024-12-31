import joi from "joi"
import jwt from "jsonwebtoken"

export const signupValidation=(req,res,next)=>{
    // console.log(req.body);
    const Schema=joi.object({
        name:joi.string().min(3).max(100).required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),

    });
    const {error}=Schema.validate(req.body);
    if(error )
    {
        return res.status(400).json({message:"Bad request Did Not Matched required Format ",error});
    }
    next();
};

export const loginValidation=(req,res,next)=>{   
    const Schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),

    }).required().min(1);
    const {error}=Schema.validate(req.body);
    if(error)
    {
        return res.status(400).json({message:"Bad request",error});
    }
    next();
};

export const ensureAuthenticated = async (req, res, next) => {
    const authorization = req.headers.authorization;
    const token = authorization && authorization.startsWith('Bearer ')? authorization.split(' ')[1]: authorization; // Fallback to the full value if no 'Bearer'
    
    // const token = req.headers.authorization?.split(' ')[1]  ;
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user =decoded;
      next();
    } catch (error) {

      res.status(401).json([{ message: `Failed to authenticate token: ${error.message}` },{error:`${error}`}]);
    }
};