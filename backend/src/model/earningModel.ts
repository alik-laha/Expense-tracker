import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js";
import User from "./userModel.js";
import EarningFrom from "./earningFromModel.js";

const Earning = sequelize.define('Earning', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: EarningFrom,
            key: 'source'
        }
    },
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'userid'
        }
    }
});

export default Earning;