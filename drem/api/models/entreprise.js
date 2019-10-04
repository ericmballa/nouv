const mongoose = require("mongoose");

const entrepriseSchema = mongoose.Schema({
  nom: String,
  secteur: { type: String, default: "inconnu" },
  telephone: { type: Number, default: 00000 },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Entreprise", entrepriseSchema);
