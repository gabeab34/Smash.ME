const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const { stringify } = require("qs");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tournament: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standings: 
      {
        type: DataTypes.INTEGER, 
        allowNull: false,
      },
    character: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Event",
  }
);

module.exports = Event;
