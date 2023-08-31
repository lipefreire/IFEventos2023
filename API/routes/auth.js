const express = require("express");
const router = express.Router();
const dbConnection = require("../config/dbConnection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  const data = {
    cpf: req.body.cpf,
    name: req.body.name,
    ocupation: req.body.ocupation,
    email: req.body.email,
    institution: req.body.institution,
    deficiency: req.body.deficiency,
    id_campus: req.body.id_campus,
    password: req.body.password,
    sage: req.body.sage,
    id_type_user: req.body.id_type_user,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
  };

  dbConnection.query(
    "SELECT * FROM users WHERE email = ?",
    [data.email],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }
      if (results.length > 0) {
        res.status(401).send({ message: "User already registered!" });
      } else {
        bcrypt.hash(data.password, 10, (errBcrypt, hash) => {
          if (errBcrypt) {
            return res.status(500).send({
              error: errBcrypt,
            });
          }

          dbConnection.query(
            "INSERT INTO people (cpf, name, ocupation,  email, institution, deficiency,  id_campus, created_at, updated_at) VALUES (?,?,?, ?,?,?, ?,?,?)",
            [
              data.cpf,
              data.name,
              data.ocupation,
              data.email,
              data.institution,
              data.deficiency,
              data.id_campus,
              data.created_at,
              data.updated_at,
            ],
            (error, resultPeople) => {
              if (error) {
                res.status(500).send({
                  error: error,
                  response: null,
                });
              }

              let id_people = resultPeople.insertId;

              dbConnection.query(
                "INSERT INTO users (cpf, name, email,  password, sage, id_type_user,  created_at, updated_at) VALUES (?,?,?, ?,?,?, ?,?)",
                [
                  data.cpf,
                  data.name,
                  data.email,
                  hash,
                  data.sage,
                  data.id_type_user,
                  data.created_at,
                  data.updated_at,
                ],
                (error, resultUser) => {
                  if (error) {
                    res.status(500).send({
                      error: error,
                      response: null,
                    });
                  }

                  const token = jwt.sign(
                    {
                      id: resultUser.insertId,
                      name: data.name,
                      email: data.email,
                    },
                    process.env.JWT_KEY,
                    {
                      expiresIn: "168h",
                    }
                  );

                  res.status(201).send({
                    message: "User Inserted Successfully!",
                    user: {
                      id: resultUser.insertId,
                      id_people: id_people,
                      name: data.name,
                      email: data.email,
                      type_user: data.id_type_user,
                    },
                    token: token,
                  });
                }
              );
            }
          );
        });
      }
    }
  );
});

router.post("/", (req, res, next) => {
  const user = {
    cpf: req.body.cpf,
    password: req.body.password,
  };

  dbConnection.query(
    "SELECT * FROM users WHERE cpf = ?",
    [user.cpf],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }

      dbConnection.query(
        "SELECT * FROM people WHERE cpf = ?",
        [user.cpf],
        (error, resultPeople) => {
          if (error) {
            res.status(500).send({
              error: error,
              response: null,
            });
          }

          if (results.length < 1) {
            return res.status(401).send({ message: "authentication failed" });
          }

          bcrypt.compare(user.password, results[0].password, (err, result) => {
            if (err) {
              return res.status(401).send({ message: "authentication failed" });
            }

            if (result) {
              const token = jwt.sign(
                {
                  id: results[0].id,
                  name: results[0].name,
                  email: results[0].email,
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "168h",
                }
              );

              return res.status(200).send({
                message: "authenticated successfully",
                user: {
                  id: results[0].id,
                  id_people: resultPeople[0].id,
                  name: results[0].name,
                  email: results[0].email,
                  type_user: results[0].id_type_user,
                },
                token: token,
              });
            }

            return res.status(401).send({ message: "authentication failed" });
          });
        }
      );
    }
  );
});

router.post("/check-token", (req, res) => {
  const token = req.body.token;
  const TOKEN_KEY = process.env.JWT_KEY;

  if (!TOKEN_KEY) {
    return res.status(401).send({ error: "Environment TOKEN_KEY is empty" });
  } else {
    if (token) {
      jwt.verify(token, TOKEN_KEY, (err) => {
        if (err) {
          return res
            .status(500)
            .send({ auth: false, message: "Token expired." });
        }
        return res.status(200).send({ auth: true, message: "Token valid." });
      });
    } else {
      return res.status(500).send({ auth: false, message: "Token invalid." });
    }
  }
});

module.exports = router;
