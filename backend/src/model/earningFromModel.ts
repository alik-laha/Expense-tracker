import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js";
import User from "./userModel.js";

const EarningFrom = sequelize.define('EarningFrom', {
    id: {
        type: DataTypes.STRING,
    },
    source: {
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

export default EarningFrom;