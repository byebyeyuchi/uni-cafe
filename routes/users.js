const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route    POST api/users
// @desc     Register a user
// @access   Public
// use express validator to validate the registration input
router.post(
   "/",
   [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check(
         "password",
         "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
   ],
   async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         console.log("register error");
         return res.status(400).json({ errors: errors.array() });
      }

      // extract request info
      const { name, email, password } = req.body;
      try {
         let user = await User.findOne({ email });
         if (user) {
            return res.status(400).json({ msg: "User already exists" });
         }

         user = new User({
            name,
            email,
            password,
         });

         // hash the password
         const salt = await bcrypt.genSalt(10);
         user.password = await bcrypt.hash(password, salt);

         await user.save(); // put the input in the database

         // generate token
         const payload = {
            user: {
               id: user.id,
            },
         };
         jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
            if (err) throw err;
            res.json({ token }); // return the token in the cb function
         });
      } catch (err) {
         console.error(err.message);
         res.status(500).send("Server Error");
      }
   }
);

// @route    PUT api/users
// @desc     Update user profile
// @access   Private
// use express validator to validate the registration input
router.put("/:id", auth, async (req, res) => {
   const { name, location, age, job } = req.body;

   // Build user object
   const userFields = {};
   if (name) userFields.name = name;
   if (location) userFields.location = location;
   if (age) userFields.age = age;
   if (job) userFields.job = job;

   try {
      let user = await User.findById(req.params.id);

      if (!user) return res.status(404).json({ msg: "User not found" });

      user = await User.findByIdAndUpdate(
         req.params.id,
         { $set: userFields },
         { new: true }
      );

      res.json(user);
   } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
   }
});

// @desc      Upload photo for bootcamp
// @route     PUT /api/v1/bootcamps/:id/photo
// @access    Private
router.put("/:id/photo", auth, async (req, res) => {
   try {
      let user = await User.findById(req.params.id);

      if (!user) return res.status(404).json({ msg: "User not found" });

      if (!req.files) {
         return res.status(400).json({ msg: "Please upload a file!" });
      }

      const file = req.files.file;

      if (!file.mimetype.startsWith("image")) {
         return res.status(400).json({ msg: "Please upload an image file!" });
      }

      // Check filesize
      if (file.size > process.env.MAX_FILE_UPLOAD) {
         return res
            .status(400)
            .json({
               msg: `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}!`,
            });
      }

      file.name = `photo_${user._id}${path.parse(file.name).ext}`;

      // move the actual file to a public folder (need update)
      file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
         if (err) {
            console.error(err);
            return res
               .status(500)
               .json({ msg: "Problem with uploading the file!" });
         }

         await User.findByIdAndUpdate(req.params.id, { photo: file.name });

         res.json({
            success: true,
            data: file.name,
         });
      });
   } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
   }
});

module.exports = router;
