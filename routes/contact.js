'use strict';
var express = require('express');
var Contact = require('../models/contact');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
          Contact
                    .fetchAll()
                          .then(function(contacts) {
                                      res.json({ contacts });
                                            });
            })
  .post(function(req, res){
      new Contact({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress,
      })
        .save()
        .then(function(saved){
            res.json({saved});
        });
  });

module.exports = router;
