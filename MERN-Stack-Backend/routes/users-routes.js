const router = require("express").Router();
let user = require("../models/user");

//add new user
router.route("/Uadd").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const gender = req.body.gender;
  const dateJoined = Date(req.body.dateJoined);
  const active = req.body.active;

  const newUser = new user({
    name,
    email,
    phone,
    address,
    gender,
    dateJoined,
    active,
  });

  newUser
    .save()
    .then(() => {
      res.json("new user added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all users
router.get("/", (req, res) => {
  user.find().exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingusers: user,
    });
  });
});

//update user
router.put("/update/:id", (req, res) => {
  user.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.sendStatus(400).json({ error: err });
      }

      return res.status(200).json({
        success: "User updated successfully",
      });
    }
  );
});

//delete a user
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await user
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted successfully" });
    })
    .catch((err) => {
      console.log(err, message);
      res
        .status(500)
        .send({ status: "error while deleting user", error: err.message });
    });
});

//search user by id
/*router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  user
    .findById(userId)
    .then((user) => {
      res.status(200).send({ status: "user fetched succesfully", user });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error while fetching the user", error: err.message });
    });
});*/

//grt a specific post
router.get("/get/:id", (req, res) => {
  let userId = req.params.id;

  user.findById(userId, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  });
});

module.exports = router;
