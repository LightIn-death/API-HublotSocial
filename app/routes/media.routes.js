module.exports = app => {
    const medias = require("../controllers/media.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", medias.create);

    // Retrieve all Tutorials
    router.get("/", medias.findAll);

    // Retrieve all published Tutorials
    router.get("/video", medias.findAllVideo);

    // Retrieve a single Tutorial with id
    router.get("/:id", medias.findOne);

    // Update a Tutorial with id
    router.put("/:id", medias.update);

    // Delete a Tutorial with id
    router.delete("/:id", medias.delete);

    // Delete all Tutorials
    router.delete("/", medias.deleteAll);

    app.use('/media', router);
};