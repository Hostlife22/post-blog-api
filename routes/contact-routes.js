const express = require("express");
const { getContact } = require("../controllers/contact-controller");

const router = express.Router();

router.get("/contacts", getContact);

module.exports = router;
