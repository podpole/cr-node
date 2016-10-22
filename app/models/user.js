var Sequelize = require('sequelize');
var db = require('./../config/db');

var user = db.define(
    'user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: 'uniq_email'
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: 'uniq_username'
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        privacy: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        subscribe: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        subscribe_event: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        sex: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        birth_date: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        land: {
            type: Sequelize.STRING,
            allowNull: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        work: {
            type: Sequelize.STRING,
            allowNull: true
        },
        about: {
            type: Sequelize.STRING,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rank: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        b_rating: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        r_rating: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        c_rating: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        language: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'ru'
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        logins: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        created: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        last_login: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        last_visited: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        confirm: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        isAdmin: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        source: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        timestamps: false
    }
);

module.exports = user;