const express = require("express");
const fs = require("fs");
//const del = require('del');
const path = require("path");
const User = require("../models/user");
const router = express.Router();
const debug = require("debug");
debugWarn = debug("warn");
debugError = debug("error");

router.post("/", (req, res, next) => {
  // let lena;
  //req.io.sockets.emit("moi", "socket");
  console.log(new Date().getTime());
  console.log(`la date ${new Date().getUTCDate()}`);
  //console.log(`la date ${new Date().}`);
  //console.log(req.body);
  const unuser = new User(req.body);
  /* unuser.nom = req.body.nom;
  unuser.ville = req.body.ville;
  unuser.telephone = req.body.telephone;
  unuser.poste = req.body.poste;
  unuser.sex = req.body.sex;
*/
  User.find({ email: req.body.email }, "-__v")
    /*.find(
        {
          $or: [{ cni: req.body.cni }, { carteelecteur: req.body.carteelecteur }]
        },
        "-__v"
      ) */
    .exec()
    .then(user => {
      if (user.length >= 1) {
        const response = {
          message2: "cet utilisateur existe deja mballus"
        };
        console.log(response);
        // req.io.sockets.emit("doublons", ledoublon);
        return res.status(409).json({
          message2: "cet utilisateur existe deja mballus",
          user: unuser
        }); //status(409).

        // const ledoublon = new doublon();
        // ledoublon.nom = req.body.Nom;
        // ledoublon.region = req.body.region;
        //  ledoublon.departement = req.body.departement;
        // ledoublon.arrondissement = req.body.arrondissement;
        // ledoublon.sex = req.body.sex;
        // ledoublon.save(err => {
        // if (err) {
        //  console.log(err);

        /*  return res.status(500).json({
                error: err
              }); */
        // }
        //req.io.sockets.emit("update", unelecteur);
        // res.status(201).json({ message: "ok" });
        // console.log(unelecteur);
      } else {
        unuser.save(err => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: err
            });
          }
          console.log(unuser);
          // req.io.sockets.emit("update", unelecteur);
          req.io.sockets.emit("newuser", req.body);
          res.status(201).json({ message: "ok" });
          // console.log(unelecteur);
        });
      }
    });
});

router.get("/", (req, res, next) => {
  debugWarn("il ya erreur");
  debugError("error detecté");
  User.find({}, "-__v")
    .lean()
    .exec((err, alluser) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: err
        });
      }

      res.json({
        users: alluser,
        count: alluser.length
      });
    });
});

router.get("/delall", (req, res, next) => {
  User.find({}, "-__v")
    .lean()
    .exec((err, alluser) => {
      if (err) {
        res.status(500).json({
          error: err
        });
      }

      for (let i = 0; i < alluser.length; i++) {
        // var img = images[i];
        var userid = alluser[i];
        User.findByIdAndRemove(userid._id, (err, image) => {
          if (err && image) {
            res.sendStatus(400);
          }
        });
      }
      res.status(200).json({ message: "users supprimé avec succé" });
    });
});
//recherche par poste
router.get("/user/:poste", (req, res, next) => {
  console.log(req.params.poste);
  User
    //.find({ nom: { $regex: req.params.id } })  bureaudevote
    .find({ poste: { $regex: req.params.poste } })

    .lean()
    .exec((err, users) => {
      if (err) {
        res.status(500).json({
          error: err
        });
      }

      res.status(200).json({ message: users });
    });
});
//recherche par nom
router.get("/nom/user/:id", (req, res, next) => {
  console.log(req.params.id);
  User.find({ nom: { $regex: req.params.id } })
    // .find({ bureaudevote: { $regex: req.params.id } })

    .lean()
    .exec((err, users) => {
      if (err) {
        res.status(500).json({
          error: err
        });
      }

      res.status(200).json({ message: users });
    });
});

router.get("/:id", (req, res, next) => {
  let imgId = req.params.id;

  User.findById(imgId, (err, user) => {
    if (err) {
      res.sendStatus(400);
    }
    //   console.log(structure);
    // stream the image back by loading the file
    res.status(200).json({ message: user });
  });
});

router.delete("/:id", (req, res, next) => {
  let userid = req.params.id;

  User.findByIdAndRemove(userid, (err, user) => {
    if (err && user) {
      res.sendStatus(400);
    }

    // res.sendStatus(200).json({ message: 'image supprimé avec succé' });
    res.status(200).json({ message: "image supprimé avec succé" });
  });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(req.body);
  console.log(req.params.id);
  const updateOps = {};
  /*  for (const ops of Object.keys(req.body)) {
    updateOps[ops.propName] = ops.value;
  }
*/
  for (const key of Object.keys(req.body)) {
    console.log(key, req.body[key]);
    updateOps[key] = req.body[key];
  }
  User.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "produit mise a jour",
        resultat: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});
//});
module.exports = router;
