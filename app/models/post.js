var Sequelize = require('sequelize');
var db = require('./../config/db');

var post = db.define(
    'posts', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

module.exports = post;