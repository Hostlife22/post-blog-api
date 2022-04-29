const Contact = require("../models/contact");
const createPath = require("../helpers/create-path");

const getContact = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => res.render(createPath("contacts"), { title, contacts }))
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"), { title: "Error" });
    });
};

module.exports = { getContact };
