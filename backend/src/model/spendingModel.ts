import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig";
import User from "./userModel";
import SPEND from "./spendonModel";


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