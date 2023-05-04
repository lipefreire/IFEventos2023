const express = require("express");
const router = express.Router();
const dbConnection = require("../config/dbConnection");

const auth = require("../middleware/login");

router.put("/event", auth, (req, res) => {
  const presence = {
    id_event: req.body.id_event,
    id_person: req.body.id_person,
    id_type_participation_event: req.body.id_type_participation_event,
  };

  dbConnection.query(
    "SELECT * FROM person_event WHERE presence = 1 and id_person = ? and id_event = ?",
    [presence.id_person, presence.id_event],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }
      if (results.length > 0) {
        res.status(401).send({ message: "Presence already registered!" });
      } else {
        dbConnection.query(
          "UPDATE person_event SET presence = 1 WHERE id_person = ? and id_event = ?",
          [presence.id_person, presence.id_event],
          (error, result) => {
            if (error) {
              res.status(500).send({
                error: error,
                response: null,
              });
            }
            res
              .status(201)
              .send({ message: "Attendance registered successfully!" });
          }
        );
      }
    }
  );
});

router.put("/subevent", (req, res) => {
  const presence = {
    id_subevent: req.body.id_subevent,
    id_person: req.body.id_person,
  };

  dbConnection.query(
    "SELECT * FROM person_subevent WHERE id_subevent = ? and id_person = ?",
    [presence.id_subevent, presence.id_person],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }

      if (results.length <= 0) {
        res.status(401).send({ Error: 1, message: "Faça Inscrição no evento" });
      } else {
        if (results[0].presence === 1) {
          res
            .status(401)
            .send({ Error: 0, message: "Presence already registered!" });
        } else {
          dbConnection.query(
            "UPDATE person_subevent SET presence = 1 WHERE id_subevent = ? and id_person = ?",
            [presence.id_subevent, presence.id_person],
            (error, result) => {
              if (error) {
                res.status(500).send({
                  error: error,
                  response: null,
                });
              }
              res.status(201).send({
                Error: 0,
                message: "Attendance registered successfully!",
              });
            }
          );
        }
      }
    }
  );
});

module.exports = router;
