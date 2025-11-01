const express = require("express")
const router = express.Router();
const verifytoken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware" )
router.get("/admin",verifytoken,authorizeRoles("admin"),(req,res)=> {
    res.json({message:"Welcome Admin"});
});

router.get("/manager",verifytoken,authorizeRoles("admin,manager"),(req, res)=> {
    res.json({message:"Welcome Admin"});
});

router.get("/user",verifytoken,authorizeRoles("admin,manager,user"),(req,res)=>{
    res.json({message: "Welcome User"});
});
module.exports = router;
