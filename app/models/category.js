var Sequelize = require('sequelize');
var db = require('./../config/db');

var category = db.define(
    'category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        header: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        meta_title: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        meta_description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        meta_keywords: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = category;