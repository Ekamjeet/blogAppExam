const express = require("express");
const {
    signUp,
    handleSignUp
} = require('../controllers/newUser');

const router = express.Router();

router.get("/newUser", signUp);
router.post("/sign", handleSignUp);

module.exports = router;