const knex = require("knex")(require("../knexfile"));

const getClassesList = async (req, res) => {
  try {
    const classes = await knex("classes").select("*");
    const updatedClasses = classes.map((classData) => {
      const imagePath = classData.images.replace("public/", "");
      return {
        ...classData,
        images: `http://localhost:8080/${imagePath}`, // Update to your server URL if different
      };
    });
    res.status(200).json(updatedClasses);
  } catch (err) {
    res.status(400).send(`Error retrieving classes: ${err}`);
  }
};
const getSingleClass = async (req, res) => {
  try {
    const classes = await knex("classes")
      .where({
        id: req.params.id,
      })
      .first();

    if (!classes) {
      return res.status(404).json({
        message: `class with ID ${req.params.id} not found`,
      });
    }
    const imagePath = classes.images.replace("public/", "");
    console.log(imagePath);
    const classData = {
      id: classes.id,
      title: classes.title,
      description: classes.description,
      date: classes.date,
      location: classes.location,
      instructor: classes.instructor,
      images: `http://localhost:8080/${imagePath}`,
    };
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve data for class with ID ${req.params.id}`,
    });
  }
};
const postClasses = async (req, res) => {
  const { title, description, location, date, instructor } = req.body;
  const userId = req.params.id;
  const imagePath = req.file
    ? `images/${req.file.filename}`
    : "images/default_image.jpg";

  console.log("Request body:", req.body);
  console.log("Request file:", req.file);
  console.log("Request params:", req.params);
  // Validate required fields
  if (!title || !description || !date || !location || !instructor || !userId) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    // Insert new class
    const newClasses = await knex("classes").insert({
      title,
      description,
      date,
      location,
      instructor,
      images: imagePath,
      user_id: userId,
    });

    const newClassId = newClasses[0];
    const createdClass = await knex("classes")
      .where({ id: newClassId })
      .first();

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
