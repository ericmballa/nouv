const express = require("express");
const fs = require("fs");
//const del = require('del');
const path = require("path");
const Entreprise = require("../models/entreprise");
const router = express.Router();

router.post("/", (req, res, next) => {
  // let lena;
  // console.log(req.params);
  const unentreprise = new Entreprise();
  unentreprise.nom = req.body.nom;
  unentreprise.secteur = req.body.secteur;
  unentreprise.telephone = req.body.telephone;

  Entreprise.find({ telephone: req.body.telephone }, "-__v")
    /*.find(
        {
          $or: [{ cni: req.body.cni }, { carteelecteur: req.body.carteelecteur }]
        },
        "-__v"
      ) */
    .exec()
    .then(entreprise => {
      if (entreprise.length >= 1) {
        const response = {
          message2: "cette entreprise existe"
        };
        console.log(response);
        // req.io.sockets.emit("doublons", ledoublon);
        return res.status(409).json({
          message2: "existe deja "
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
        unentreprise.save(err => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: err
            });
          }
          // req.io.sockets.emit("update", unelecteur);
          res.status(201).json({ message: "ok" });
          // console.log(unelecteur);
        });
      }
    });
});

router.get("/", (req, res, next) => {
  Entreprise.find({}, "-__v")
    .lean()
    .exec((err, alluser) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: err
        });
      }

      res.json({
        Entreprise: allentreprise,
        count: allentreprise.length
      });
    });
});

router.get("/delall", (req, res, next) => {
  Entreprise.find({}, "-__v")
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
        electeur.findByIdAndRemove(userid._id, (err, image) => {
          if (err && image) {
            res.sendStatus(400);
          }
        });
      }
      res.status(200).json({ message: "users supprimé avec succé" });
    });
});
//recherche par poste
router.get("/entreprise/:secteur", (req, res, next) => {
  console.log(req.params.poste);
  Entreprise
    //.find({ nom: { $regex: req.params.id } })  bureaudevote
    .find({ secteur: { $regex: req.params.secteur } })

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
  Entreprise.find({ nom: { $regex: req.params.id } })
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

  Entreprise.findById(imgId, (err, user) => {
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

  Entreprise.findByIdAndRemove(userid, (err, user) => {
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
  Entreprise.update({ _id: id }, { $set: updateOps })
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
