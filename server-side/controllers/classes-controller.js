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
      message: `Unable to retrieve data for class with ID ${req.params.id}`,
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
const registerToClass = async (req, res) => {
  const { user_id, class_id } = req.body;

  if (!class_id) {
    return res.status(400).json({
      message: "Please provide user ID and class ID",
    });
  }

  try {
    const foundClass = await knex("classes").where({ id: class_id }).first();
    if (!foundClass) {
      return res.status(404).json({
        message: `Class with ID ${class_id} not found`,
      });
    }

    const foundUser = await knex("users").where({ id: user_id }).first();
    if (!foundUser) {
      return res.status(404).json({
        message: `User with ID ${user_id} not found`,
      });
    }

    // insert  the user and class data to register table
    await knex("register").insert({
      class_id: class_id,
      user_id: user_id,
    });

    res.status(200).json({
      message: `User ${user_id} registered successfully to class ${class_id}`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to register user to class: ${error}`,
    });
  }
};

const postFeedback = async (req, res) => {
  const user_id = req.user?.id;
  const class_id = req.params?.id;
  const comment = req.body?.comment;

  if (!comment || !class_id || !user_id) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    const result = await knex("class_rating").insert({
      ...req.body,
      class_id: class_id,
    });

    const newCommentId = result[0];
    const newComment = await knex("class_rating").where({
      id: newCommentId,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({
      message: `Unable to post new feeback: ${error}`,
    });
  }
};

module.exports = {
  postClasses,
  getClassesList,
  getSingleClass,
  registerToClass,
  postFeedback,
};
///api/capstone/classes/:classId/comments
