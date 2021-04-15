const newUser = require("../models/newUser");


exports.signUp = async (res, req) => {
    try {
        const user = await newUser.find({});
        let pname = "Login";
        if (user.length === 0) {
            pname = "Sign";
        }
        res.render("newUser/newUser", {
            pname
        });
    } catch (e) {
        res.status(500).send(e);
    }
}


exports.handleSignUp = async (req, res) => {
    try {
        let {
            firstname,
            lastname,
            username,
            password,
            confirmpassword,
        } = req.body;
        const user = await newUser.find({});
        if (user.length === 0) {
            password = await bcrypt.hash(password, 10);
            const user = new User({
                firstname,
                lastname,
                username,
                password,
                confirmpassword,
            });
            await user.save();
            req.session.admin = true;
            res.redirect("/user/login");
        } else {
            const truth = await bcrypt.compare(password, user[0].password);
            if (truth) {
                req.session.admin = true;
                res.redirect("/user/login");
            } else {
                res.status(400).send("Invalid user or password");
            }
        }
    } catch (e) {
        res.status(500).send(e);
    }
}
