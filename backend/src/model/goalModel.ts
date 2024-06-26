import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js";
import User from "./userModel.js";

const Goal = sequelize.define('Goal', {
    id: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    goal: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: User,
            key: 'userid'
        }
    }
});
export default Goal;