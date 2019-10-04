const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nom: String,
  ville: String,
  country: String,
  email: String,
  sex: String,
  diplome1: String,
  diplome2: String,
  diplome3: String,
  formation1: String,
  formation2: String,
  formation3: String,
  age: Number,
  genre: String,
  prenom: { type: String, default: "pas de poste" },
  telephone: { type: Number, default: 00000 },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);

/*
app.post('/api/rooms', function(req, res) {

  Room.find({
      type: req.body.roomType,
      beds: req.body.beds,
      max_occupancy: {$gt: req.body.guests},
      cost_per_night: {$gte: req.body.priceRange.lower, $lte: req.body.priceRange.upper},
      reserved: { 

          //Check if any of the dates the room has been reserved for overlap with the requsted dates
          $not: {
              $elemMatch: {from: {$lt: req.body.to.substring(0,10)}, to: {$gt: req.body.from.substring(0,10)}}
          }

      }
  }, function(err, rooms){
      if(err){
          res.send(err);
      } else {
          res.json(rooms);
      }
  });

});

app.post('/api/rooms/reserve', function(req, res) {

  console.log(req.body._id);

  Room.findByIdAndUpdate(req.body._id, {
      $push: {"reserved": {from: req.body.from, to: req.body.to}}
  }, {
      safe: true,
      new: true
  }, function(err, room){
      if(err){
          res.send(err);
      } else {
          res.json(room);
      }
  });

});
*/
