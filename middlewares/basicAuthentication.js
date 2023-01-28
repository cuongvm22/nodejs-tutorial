// handle authorized config in here
module.exports.isAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    console.log("\nauth:", auth)
    if (!auth){
        res.status(403).jsonp(req.headers)
    }
    else {
        next();
    }
}