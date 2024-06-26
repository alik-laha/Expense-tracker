import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js";
import User from "./userModel.js";
import SPEND from "./spendonModel.js";


const Spending = sequelize.define('Spending', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    spendOn: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: SPEND,
            key: 'spendOn'
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

export default Spending;