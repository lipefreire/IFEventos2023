const express = require("express");
const router = express.Router();
const dbConnection = require("../config/dbConnection");

const auth = require("../middleware/login");

router.get("/all/:id_people/", auth, (req, res) => {
  let id_person = req.params.id_people;

  dbConnection.query(
    `SELECT * FROM events ORDER BY init_date DESC`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }

      dbConnection.query("SELECT * FROM campi", (error, resultCampi) => {
        if (error) {
          return res.status(500).send({ error: error });
        }

        dbConnection.query("SELECT * FROM cities", (error, resultCities) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_event WHERE id_person = ${id_person}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let events = [];
              result.forEach((element) => {
                let campus = [];
                let city = [];
                let registered = [];

                resultCampi.forEach((elementCampi) => {
                  if (element.id_campus === elementCampi.id) {
                    campus.push({
                      name: elementCampi.name,
                    });
                  }
                });

                resultCities.forEach((elementCities) => {
                  if (element.id_city === elementCities.id) {
                    city.push({
                      name: elementCities.name,
                    });
                  }
                });

                resultPersonEvent.forEach((elementPersonEvent) => {
                  if (elementPersonEvent.id_event === element.id) {
                    registered.push({
                      inscrito: 1,
                    });
                  }
                });

                if (element.init_date < new Date()) {
                  events.push({
                    id: element.id,
                    registered: registered.length > 0 ? 1 : 0,
                    title: element.title,
                    short_title: element.short_title,
                    portaria: element.portaria,
                    init_date: element.init_date,
                    final_date: element.final_date,
                    init_time: element.init_time,
                    final_time: element.final_time,
                    description: element.description,
                    status_event: element.status_event,
                    status_enrollment: element.status_enrollment,
                    banner: `https://ifeventos.ifsertao-pe.edu.br/${element.banner}`,
                    address_local: element.address_local,
                    cep: element.cep,
                    address_street: element.address_street,
                    address_number: element.address_number,
                    address_complement: element.address_complement,
                    address_district: element.address_district,
                    campus: campus[0].name,
                    city: city[0].name,
                  });
                }
              });

              return res.status(200).send({ response: events });
            }
          );
        });
      });
    }
  );
});

router.get("/all/:id_people/:offset", auth, (req, res) => {
  let id_person = req.params.id_people;
  let offset = req.params.offset;

  dbConnection.query(
    `SELECT * FROM events ORDER BY init_date DESC LIMIT 10 OFFSET ${offset}`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }

      dbConnection.query("SELECT * FROM campi", (error, resultCampi) => {
        if (error) {
          return res.status(500).send({ error: error });
        }

        dbConnection.query("SELECT * FROM cities", (error, resultCities) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_event WHERE id_person = ${id_person}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let events = [];
              result.forEach((element) => {
                let campus = [];
                let city = [];
                let registered = [];

                resultCampi.forEach((elementCampi) => {
                  if (element.id_campus === elementCampi.id) {
                    campus.push({
                      name: elementCampi.name,
                    });
                  }
                });

                resultCities.forEach((elementCities) => {
                  if (element.id_city === elementCities.id) {
                    city.push({
                      name: elementCities.name,
                    });
                  }
                });

                resultPersonEvent.forEach((elementPersonEvent) => {
                  if (elementPersonEvent.id_event === element.id) {
                    registered.push({
                      inscrito: 1,
                    });
                  }
                });

                if (element.init_date < new Date()) {
                  events.push({
                    id: element.id,
                    registered: registered.length > 0 ? 1 : 0,
                    title: element.title,
                    short_title: element.short_title,
                    portaria: element.portaria,
                    init_date: element.init_date,
                    final_date: element.final_date,
                    init_time: element.init_time,
                    final_time: element.final_time,
                    description: element.description,
                    status_event: element.status_event,
                    status_enrollment: element.status_enrollment,
                    banner: `https://ifeventos.ifsertao-pe.edu.br/${element.banner}`,
                    address_local: element.address_local,
                    cep: element.cep,
                    address_street: element.address_street,
                    address_number: element.address_number,
                    address_complement: element.address_complement,
                    address_district: element.address_district,
                    campus: campus[0].name,
                    city: city[0].name,
                  });
                }
              });

              return res.status(200).send({ response: events });
            }
          );
        });
      });
    }
  );
});

router.get("/next/:id_people/", auth, (req, res) => {
  let id_person = req.params.id_people;

  dbConnection.query(
    `SELECT * FROM events ORDER BY init_date DESC`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }

      dbConnection.query("SELECT * FROM campi", (error, resultCampi) => {
        if (error) {
          return res.status(500).send({ error: error });
        }

        dbConnection.query("SELECT * FROM cities", (error, resultCities) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_event WHERE id_person = ${id_person}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let events = [];
              result.forEach((element) => {
                let campus = [];
                let city = [];
                let registered = [];

                resultCampi.forEach((elementCampi) => {
                  if (element.id_campus === elementCampi.id) {
                    campus.push({
                      name: elementCampi.name,
                    });
                  }
                });

                resultCities.forEach((elementCities) => {
                  if (element.id_city === elementCities.id) {
                    city.push({
                      name: elementCities.name,
                    });
                  }
                });

                resultPersonEvent.forEach((elementPersonEvent) => {
                  if (elementPersonEvent.id_event === element.id) {
                    registered.push({
                      inscrito: 1,
                    });
                  }
                });

                if (element.final_date > new Date()) {
                  events.push({
                    id: element.id,
                    registered: registered.length > 0 ? 1 : 0,
                    title: element.title,
                    short_title: element.short_title,
                    portaria: element.portaria,
                    init_date: element.init_date,
                    final_date: element.final_date,
                    init_time: element.init_time,
                    final_time: element.final_time,
                    description: element.description,
                    status_event: element.status_event,
                    status_enrollment: element.status_enrollment,
                    banner: `https://ifeventos.ifsertao-pe.edu.br/${element.banner}`,
                    address_local: element.address_local,
                    cep: element.cep,
                    address_street: element.address_street,
                    address_number: element.address_number,
                    address_complement: element.address_complement,
                    address_district: element.address_district,
                    campus: campus[0].name,
                    city: city[0].name,
                  });
                }
              });

              return res.status(200).send({ response: events });
            }
          );
        });
      });
    }
  );
});

router.get("/next/:id_people/:offset", auth, (req, res) => {
  let id_person = req.params.id_people;
  let offset = req.params.offset;

  dbConnection.query(
    `SELECT * FROM events ORDER BY init_date DESC LIMIT 10 OFFSET ${offset}`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }

      dbConnection.query("SELECT * FROM campi", (error, resultCampi) => {
        if (error) {
          return res.status(500).send({ error: error });
        }

        dbConnection.query("SELECT * FROM cities", (error, resultCities) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_event WHERE id_person = ${id_person}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let events = [];
              result.forEach((element) => {
                let campus = [];
                let city = [];
                let registered = [];

                resultCampi.forEach((elementCampi) => {
                  if (element.id_campus === elementCampi.id) {
                    campus.push({
                      name: elementCampi.name,
                    });
                  }
                });

                resultCities.forEach((elementCities) => {
                  if (element.id_city === elementCities.id) {
                    city.push({
                      name: elementCities.name,
                    });
                  }
                });

                resultPersonEvent.forEach((elementPersonEvent) => {
                  if (elementPersonEvent.id_event === element.id) {
                    registered.push({
                      inscrito: 1,
                    });
                  }
                });

                if (element.final_date > new Date()) {
                  events.push({
                    id: element.id,
                    registered: registered.length > 0 ? 1 : 0,
                    title: element.title,
                    short_title: element.short_title,
                    portaria: element.portaria,
                    init_date: element.init_date,
                    final_date: element.final_date,
                    init_time: element.init_time,
                    final_time: element.final_time,
                    description: element.description,
                    status_event: element.status_event,
                    status_enrollment: element.status_enrollment,
                    banner: `https://ifeventos.ifsertao-pe.edu.br/${element.banner}`,
                    address_local: element.address_local,
                    cep: element.cep,
                    address_street: element.address_street,
                    address_number: element.address_number,
                    address_complement: element.address_complement,
                    address_district: element.address_district,
                    campus: campus[0].name,
                    city: city[0].name,
                  });
                }
              });

              return res.status(200).send({ response: events });
            }
          );
        });
      });
    }
  );
});

router.get("/registered/:id_people", auth, (req, res) => {
  let id_person = req.params.id_people;

  dbConnection.query(
    `SELECT * FROM events ORDER BY init_date ASC`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }

      dbConnection.query("SELECT * FROM campi", (error, resultCampi) => {
        if (error) {
          return res.status(500).send({ error: error });
        }

        dbConnection.query("SELECT * FROM cities", (error, resultCities) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_event WHERE id_person = ${id_person}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let events = [];
              let eventsNext = [];

              result.forEach((element) => {
                let campus = [];
                let city = [];
                let registered = [];

                resultCampi.forEach((elementCampi) => {
                  if (element.id_campus === elementCampi.id) {
                    campus.push({
                      name: elementCampi.name,
                    });
                  }
                });

                resultCities.forEach((elementCities) => {
                  if (element.id_city === elementCities.id) {
                    city.push({
                      name: elementCities.name,
                    });
                  }
                });

                resultPersonEvent.forEach((elementPersonEvent) => {
                  if (elementPersonEvent.id_event === element.id) {
                    registered.push({
                      inscrito: 1,
                    });
                  }
                });

                if (registered.length > 0 && element.final_date >= new Date()) {
                  eventsNext.push({
                    id: element.id,
                    registered: registered.length > 0 ? 1 : 0,
                    title: element.title,
                    short_title: element.short_title,
                    portaria: element.portaria,
                    init_date: element.init_date,
                    final_date: element.final_date,
                    init_time: element.init_time,
                    final_time: element.final_time,
                    description: element.description,
                    status_event: element.status_event,
                    status_enrollment: element.status_enrollment,
                    banner: `https://ifeventos.ifsertao-pe.edu.br/${element.banner}`,
                    address_local: element.address_local,
                    cep: element.cep,
                    address_street: element.address_street,
                    address_number: element.address_number,
                    address_complement: element.address_complement,
                    address_district: element.address_district,
                    campus: campus[0].name,
                    city: city[0].name,
                  });
                }

                if (registered.length > 0 && element.final_date < new Date()) {
                  events.push({
                    id: element.id,
                    registered: registered.length > 0 ? 1 : 0,
                    title: element.title,
                    short_title: element.short_title,
                    portaria: element.portaria,
                    init_date: element.init_date,
                    final_date: element.final_date,
                    init_time: element.init_time,
                    final_time: element.final_time,
                    description: element.description,
                    status_event: element.status_event,
                    status_enrollment: element.status_enrollment,
                    banner: `https://ifeventos.ifsertao-pe.edu.br/${element.banner}`,
                    address_local: element.address_local,
                    cep: element.cep,
                    address_street: element.address_street,
                    address_number: element.address_number,
                    address_complement: element.address_complement,
                    address_district: element.address_district,
                    campus: campus[0].name,
                    city: city[0].name,
                  });
                }
              });

              return res
                .status(200)
                .send({ response: events, responseNext: eventsNext });
            }
          );
        });
      });
    }
  );
});

router.get("/:id_event/:id_people", auth, (req, res) => {
  const id = req.params.id_event;
  const id_person = req.params.id_people;

  dbConnection.query(
    `SELECT * FROM events WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      dbConnection.query("SELECT * FROM campi", (error, resultCampi) => {
        if (error) {
          return res.status(500).send({ error: error });
        }

        dbConnection.query("SELECT * FROM cities", (error, resultCities) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_event WHERE id_event = ${id} and id_person = ${id_person}`,
            (error, resultPerson) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let registered = resultPerson.length > 0 ? 1 : 0;
              let campus = [];
              let city = [];

              resultCampi.forEach((elementCampi) => {
                if (result[0].id_campus === elementCampi.id) {
                  campus.push({
                    name: elementCampi.name,
                  });
                }
              });

              resultCities.forEach((elementCities) => {
                if (result[0].id_city === elementCities.id) {
                  city.push({
                    name: elementCities.name,
                  });
                }
              });

              let events = {
                id: result[0].id,
                registered: registered,
                title: result[0].title,
                short_title: result[0].short_title,
                portaria: result[0].portaria,
                init_date: result[0].init_date,
                final_date: result[0].final_date,
                init_time: result[0].init_time,
                final_time: result[0].final_time,
                description: result[0].description,
                status_event: result[0].status_event,
                status_enrollment: result[0].status_enrollment,
                banner: `https://ifeventos.ifsertao-pe.edu.br/${result[0].banner}`,
                address_local: result[0].address_local,
                cep: result[0].cep,
                address_street: result[0].address_street,
                address_number: result[0].address_number,
                address_complement: result[0].address_complement,
                address_district: result[0].address_district,
                campus: campus[0].name,
                city: city[0].name,
              };

              return res.status(200).send({ response: events });
            }
          );
        });
      });
    }
  );
});

router.get("/subevent/:id_event/:id_people", auth, (req, res) => {
  const id = req.params.id_event;
  const id_people = req.params.id_people;

  dbConnection.query(
    `SELECT * FROM subevents WHERE id_event = ${id}`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      dbConnection.query(
        `SELECT * FROM type_subevents`,
        (error, resultType) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_subevent WHERE id_person = ${id_people}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let subevents = [];
              result.forEach((element) => {
                let typeSubevents = [];
                resultType.forEach((elementResultType) => {
                  if (element.id_type_subevent === elementResultType.id) {
                    typeSubevents.push({
                      name: elementResultType.name,
                    });
                  }
                });

                let registered = [];
                resultPersonEvent.forEach((elementPersonEvent) => {
                  if (elementPersonEvent.id_subevent === element.id) {
                    registered.push({
                      inscrito: 1,
                    });
                  }
                });

                subevents.push({
                  id: element.id,
                  registered: registered.length > 0 ? 1 : 0,
                  title: element.title,
                  description: element.description,
                  local: element.local,
                  date: element.date,
                  init_time: element.init_time,
                  final_time: element.final_time,
                  requires_enrollment: element.requires_enrollment,
                  vacancies: element.vacancies,
                  total_vacancies: element.total_vacancies,
                  authors: element.authors,
                  id_event: element.id_event,
                  type: typeSubevents[0].name,
                  id_parent: element.id_parent,
                });
              });

              return res.status(200).send({ response: subevents });
            }
          );
        }
      );
    }
  );
});

router.get("/subevent/:id_event/:id_subevent/:id_people", auth, (req, res) => {
  const id = req.params.id_event;
  const id_subevent = req.params.id_subevent;
  const id_people = req.params.id_people;

  dbConnection.query(
    `SELECT * FROM subevents WHERE id_event = ${id} and id = ${id_subevent}`,
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      dbConnection.query(
        `SELECT * FROM type_subevents`,
        (error, resultType) => {
          if (error) {
            return res.status(500).send({ error: error });
          }

          dbConnection.query(
            `SELECT * FROM person_subevent WHERE id_person = ${id_people}`,
            (error, resultPersonEvent) => {
              if (error) {
                return res.status(500).send({ error: error });
              }

              let typeSubevents = [];
              resultType.forEach((elementResultType) => {
                if (result[0].id_type_subevent === elementResultType.id) {
                  typeSubevents.push({
                    name: elementResultType.name,
                  });
                }
              });

              let registered = [];
              resultPersonEvent.forEach((elementPersonEvent) => {
                if (elementPersonEvent.id_subevent === element.id) {
                  registered.push({
                    inscrito: 1,
                  });
                }
              });

              let subevents = {
                id: result[0].id,
                registered: registered.length > 0 ? 1 : 0,
                title: result[0].title,
                description: result[0].description,
                local: result[0].local,
                date: result[0].date,
                init_time: result[0].init_time,
                final_time: result[0].final_time,
                requires_enrollment: result[0].requires_enrollment,
                vacancies: result[0].vacancies,
                total_vacancies: result[0].total_vacancies,
                authors: result[0].authors,
                id_event: result[0].id_event,
                type: typeSubevents[0].name,
                id_parent: result[0].id_parent,
              };

              return res.status(200).send({ response: subevents });
            }
          );
        }
      );
    }
  );
});

router.post("/enrollment_event", auth, (req, res) => {
  const enrollment = {
    presence: req.body.presence,
    id_person: req.body.id_person,
    id_event: req.body.id_event,
    id_type_participation_event: req.body.id_type_participation_event,
  };

  dbConnection.query(
    "SELECT * FROM person_event WHERE id_person = ? and id_event = ? and id_type_participation_event = ?",
    [
      enrollment.id_person,
      enrollment.id_event,
      enrollment.id_type_participation_event,
    ],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }
      if (results.length > 0) {
        res.status(401).send({ message: "User is already subscribed!" });
      } else {
        dbConnection.query(
          "INSERT INTO person_event (presence, id_person, id_event, id_type_participation_event) VALUES(?,?,?,?)",
          [
            enrollment.presence,
            enrollment.id_person,
            enrollment.id_event,
            enrollment.id_type_participation_event,
          ],
          (error, result) => {
            if (error) {
              res.status(500).send({
                error: error,
                response: null,
              });
            }

            const response = {
              message: "Registration successful!",
            };

            res.status(201).send({ response });
          }
        );
      }
    }
  );
});

router.post("/enrollment_event_delete", auth, (req, res) => {
  const enrollment = {
    id_event: req.body.id_event,
    id_person: req.body.id_person,
  };

  dbConnection.query(
    "SELECT * FROM person_event WHERE id_person = ? and id_event = ?",
    [enrollment.id_person, enrollment.id_event],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }

      if (results.length <= 0) {
        res.status(401).send({ message: "User is not subscribed!" });
      } else {
        dbConnection.query(
          `DELETE FROM person_event WHERE id_event = ${enrollment.id_event} AND id_person = ${enrollment.id_person}`,
          (error, result) => {
            if (error) {
              res.status(500).send({
                error: error,
                response: null,
              });
            }

            const response = {
              message: "subscription canceled!",
            };

            res.status(201).send({ response });
          }
        );
      }
    }
  );
});

router.post("/enrollment_subevent", auth, (req, res) => {
  const enrollment = {
    presence: req.body.presence,
    id_subevent: req.body.id_subevent,
    id_person: req.body.id_person,
    id_type_participation_subevent: req.body.id_type_participation_subevent,
  };

  dbConnection.query(
    "SELECT * FROM person_subevent WHERE id_subevent = ? and id_person = ? AND id_type_participation_subevent = ?;",
    [
      enrollment.id_subevent,
      enrollment.id_person,
      enrollment.id_type_participation_subevent,
    ],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }
      if (results.length > 0) {
        res.status(401).send({ message: "User is already subscribed!" });
      } else {
        dbConnection.query(
          "INSERT INTO person_subevent (presence, id_subevent, id_person, id_type_participation_subevent) VALUES(?,?,?,?)",
          [
            enrollment.presence,
            enrollment.id_subevent,
            enrollment.id_person,
            enrollment.id_type_participation_subevent,
          ],
          (error, result) => {
            if (error) {
              res.status(500).send({
                error: error,
                response: null,
              });
            }

            const response = {
              message: "Registration successful!",
            };

            res.status(201).send({ response });
          }
        );
      }
    }
  );
});

router.delete("/enrollment_subevent", auth, (req, res) => {
  const enrollment = {
    id_subevent: req.body.id_event,
    id_person: req.body.id_person,
  };

  dbConnection.query(
    "SELECT * FROM person_event WHERE id_person = ? and id_subevent = ?",
    [enrollment.id_person, enrollment.id_subevent],
    (error, results) => {
      if (error) {
        res.status(500).send({
          error: error,
          response: null,
        });
      }

      if (results.length <= 0) {
        res.status(401).send({ message: "User is not subscribed!" });
      } else {
        dbConnection.query(
          "SELECT * FROM person_event WHERE id_person = ? and id_subevent = ?",
          [enrollment.id_person, enrollment.id_subevent],
          (error, results) => {
            if (error) {
              res.status(500).send({
                error: error,
                response: null,
              });
            }
            if (results.length < 0) {
              res.status(401).send({ message: "User is not subscribed!" });
            } else {
              dbConnection.query(
                "DELETE FROM person_event WHERE id_subevent = ? AND id_person = ?",
                [enrollment.id_subevent, enrollment.id_person],
                (error, result) => {
                  if (error) {
                    res.status(500).send({
                      error: error,
                      response: null,
                    });
                  }

                  const response = {
                    message: "subscription canceled!",
                  };

                  res.status(201).send({ response });
                }
              );
            }
          }
        );
      }
    }
  );
});

module.exports = router;
