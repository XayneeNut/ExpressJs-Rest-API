const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true,// Tambahkan opsi ini
        timeStamp : false,
    });

    return Product;
};
