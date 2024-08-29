const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("users", {
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        image:{
            type:DataTypes.TEXT(),
            allowNull:false
        },
        email:{
            type:DataTypes.STRING(50),
            allowNull:false
        }
    })
    return user;
}

