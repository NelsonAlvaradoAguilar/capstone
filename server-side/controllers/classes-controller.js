const knex = require("knex")(require("../knexfile"));

const getClassesList = async (req, res) => {
  try {
    const classes = await knex("classes");
    res.status(200).json(classes);
  } catch (err) {
    res.status(400).send(`Error retrieving classes: ${err}`);
  }
};
const getSingleClass = async (req, res) => {
  try {
    const foundClass = await knex("classes").where({
      id: req.params.id,
    });

    if (foundClass.length === 0) {
      return res.status(404).json({
        message: `class with ID ${req.params.id} not found`,
      });
    }

    const classData = foundClass[0];
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve wareHouses data for wareHouse with ID ${req.params.id}`,
    });
  }
};
const postClasses = async (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.date ||
    !req.body.location ||
    !req.body.instructor ||
    !req.body.images
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    const result = await knex("classes").insert(req.body);

    const newClasstId = result[0];
    const createdClass = await knex("classes").where({
      id: newClasstId,
    });

    res.status(201).json(createdClass);
  } catch (error) {
    res.status(500).json({
      message: `Unable to post new class: ${error}`,
    });
  }
};

module.exports = {
  postClasses,
  getClassesList,
  getSingleClass,
};
