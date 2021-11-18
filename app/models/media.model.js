module.exports = (sequelize, Sequelize) => {
    const Media = sequelize.define("media", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        type : {
            type: Sequelize.INTEGER
        }
    });

    return Media;
};